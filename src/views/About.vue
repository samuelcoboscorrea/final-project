<template>
  <div class="home">
    <div class="card-container">
      <!-- Iterar sobre las rutas del router y crear tarjetas -->
      <div v-for="route in routerRoutes" :key="route.path" class="card">
        <router-link :to="route.path">
          <div class="preview">
            <!-- Aquí puedes agregar contenido de vista previa de la ruta -->
            <h3>{{ route.name }}</h3>
            <p>{{ route.meta.description }}</p>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

// Obtener las rutas del router
const routerRoutes = router.getRoutes().filter(route => route.path.includes('scenario'))
  
</script>

<style lang="scss" scoped>
.card-container {
  margin: 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Espaciado entre tarjetas */
}

.card {
  width: 200px; /* Ancho de la tarjeta */
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden; /* Para recortar cualquier contenido que sobresalga */
}

.preview {
  padding: 20px;
}
</style>