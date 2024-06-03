<template>
  <div class="m-5 text-center lg:text-start">
    <h1 class="text-4xl md:text-6xl lg:text-7xl font-bold">
      Works and Projects
    </h1>
    <p class="pt-4 text-sm text-gray-400 pb-5">
      HERE YOU CAN SEE EVERYTHING I HAVE ALREADY WORKED ON 😉
    </p>
  </div>
  <WorksGallery />
</template>

<script>
import WorksGallery from "./WorksGallery.vue";

export default {
  name: "WorksPage",
  components: { WorksGallery },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&family=Petit+Formal+Script&display=swap");

.mono {
  font-family: "JetBrains Mono", monospace;
}

.script {
  font-family: "Petit Formal Script", cursive;
}
</style>
