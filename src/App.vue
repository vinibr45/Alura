<template>
  <div class="corpo">
    <meu-menu :rotas="routes"/>   
    <transition name="pagina">

      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from './routes';
import meuMenu from './components/shared/menu/meuMenu.vue';
export default {
  components: { meuMenu },
  data() {
      return{
          routes
      }
  }
  };
</script>


<style scoped>
.corpo {
  font-family: Helvetica, sans-serif;
  width: 96%;
  margin: 0 auto;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.3s;
}
</style>