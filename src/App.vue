<template>
  <div>
    <SideBar />
  </div>

  <div class="p-4 sm:ml-48">
    <div class="m-5 text-center lg:text-start">
      <p class="text-3xl">Hello there! 👋</p>
      <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold">
        I’m a designer and developer, and I enjoy combining these two skills to
        make creative and functional projects.
      </h1>

      <p class="pt-4 text-sm text-gray-400">CURRENTLY</p>
      <p class="text-2xl">
        frontend developer @
        <a href="https://fiqon.com.br/" target="_blank" class="link font-bold"
          >FiqOn</a
        >
      </p>
      <p class="text-2xl">
        designer @
        <a
          href="https://hipublicidade.net/"
          target="_blank"
          class="link font-bold"
          >Hi Publicidade Digital</a
        >
      </p>
      <p class="text-2xl">
        internet systems student @
        <a
          href="https://www.utfpr.edu.br/"
          target="_blank"
          class="link font-bold"
          >UTFPR</a
        >
      </p>
    </div>

    <div class="m-5 text-center lg:text-start flex justify-between">
      <p class="pt-4 text-sm text-gray-400">SOME WORKS</p>
      <a href="/works" class="pt-4 text-sm text-gray-400 link">SEE ALL</a>
    </div>
    <WorksGallery />
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import WorksGallery from "./components/WorksGallery.vue";

export default {
  name: "App",
  components: {
    SideBar,
    WorksGallery,
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
