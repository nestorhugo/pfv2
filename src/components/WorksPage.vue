<template>
  <div class="m-5 text-center lg:text-start">
    <div class="flex flex-col lg:flex-row items-center">
      <div class="lg:w-5/12 pb-5">
        <h1 class="text-3xl md:text-4xl lg:text-5xl mono">
          🖥️ &lt;developer/&gt;
        </h1>
        <h1 class="text-3xl md:text-4xl lg:text-5xl pt-5 font-bold">
          🖋 designer
        </h1>
        <h1 class="text-3xl md:text-4xl lg:text-5xl pt-5 font-bold script">
          🎨 creative
        </h1>
      </div>
      <div class="lg:w-7/12 flex h-96">
        <CardWorkGallery
          :source="require('../assets/about/nestor.png')"
          desc="Nestor Hugo"
          class="mx-2"
        />

        <CardWorkGallery
          :source="require('../assets/about/parana.png')"
          desc="Nestor Hugo"
          class="mx-2"
        />

        <CardWorkGallery
          :source="require('../assets/about/silvio-rodriguez.png')"
          desc="Nestor Hugo"
          class="mx-2"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CardWorkGallery from "./CardWorkGallery.vue";

export default {
  name: "WorksPage",
  components: { CardWorkGallery },
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
