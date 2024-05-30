<template>
  <div>
    <SideBar />
  </div>

  <div class="p-4 sm:ml-48">
    <div>
      <div class="m-5 text-center lg:text-start">
        <h1 class="text-4xl font-bold text-blue-900">Bem-vindo Usuário!</h1>
        <p class="text-xl font-bold text-blue-900">
          Pronto para sua próxima aventura literária?
        </p>
      </div>

      <div class="mt-5 pt-5 ml-5 text-center lg:text-start">
        <h1 class="text-2xl font-bold text-blue-900">
          Novidades na biblioteca
        </h1>
      </div>

      <div class="p-4 flex flex-wrap justify-center lg:justify-start">
        <h1>hehe</h1>
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";

export default {
  name: "App",
  components: {
    SideBar,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
