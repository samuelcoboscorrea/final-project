
import {Matrix4} from 'three';


const poses = new Map();

function normalize(handPose) {

  // handPose is the concatenated data of 4x4 Matrices
  const size = handPose.length/16;

  // The first item in hand pose information is the wrist
  const inverseWristMat = new Matrix4();
  inverseWristMat.fromArray(handPose, 0);
  inverseWristMat.invert();

  const tempMat = new Matrix4();
  for (let i=0; i<size; i++) {
      const offset = i*16;
      tempMat.fromArray(handPose, offset);
      tempMat.premultiply(inverseWristMat);
      tempMat.toArray(handPose, offset);
  }
}

async function loadPose(name, path) {
  console.log(path)
  const url = URL.createObjectURL(new Blob([path]));
  const buffer = await fetch(url).then(response => response.arrayBuffer());
  const pose = new Float32Array(buffer);
  poses.set(name, pose);
  update()

}

function update() {

  // normalize(handPose);

		const distances = [];
		for (const [name, poseData] of poses) {
			// const isRight = Number(handedness === "right");
			const isRight = 1;
			const poseHandDataSize = poseData[0];
			const poseHandData = new Float32Array(poseData.buffer, (
				1 + // poseHandDataSize offset
				(poseHandDataSize * 16) * isRight // offset for right hand
			)*4 , poseHandDataSize * 16);
			const poseWeightData = new Float32Array(poseData.buffer, (
				1 + // poseHandDataSize offset
				(poseHandDataSize * 16) * 2 + // offset for after hand data
				(poseHandDataSize * isRight)      // offset for right hand
			)*4 , poseHandDataSize);

			const jointCount = Math.min(poseHandDataSize, handPose.length/16);
			let dist = 0;
			let totalWeight = 0.0001;
			for (let i=0; i<jointCount; i++) {
				const poseWeight = poseWeightData[i];
				totalWeight += poseWeight;
				if (i === 0) continue;

				// Algo based on join rotation apply quaternion to a vector and
				// compare positions of vectors should work a bit better
				const o = i*16;
				tempMat1.fromArray(poseHandData, o);
				tempMat2.fromArray(handPose, o);
				tempQuat1.setFromRotationMatrix(tempMat1);
				tempQuat2.setFromRotationMatrix(tempMat2);
				dist += tempQuat1.angleTo(tempQuat2) * poseWeight;
			}
			dist = dist / totalWeight;
			distances.push([name, dist]);
		}
}

loadPose('relax', './relax.handpose');
loadPose('fist', './fist.handpose');
loadPose('flat', './flat.handpose');
loadPose('point', './point.handpose');