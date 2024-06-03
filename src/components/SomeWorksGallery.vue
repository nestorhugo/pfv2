<template>
  <div class="m-5 grid grid-cols-1 md:grid-cols-2 lg:md:grid-cols-3 gap-4">
    <div class="grid gap-4">
      <CardWorkGallery
        title="HAHAHA"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
        link="/works/ferreira-group"
      />

      <CardWorkGallery
        title="Ferreira Group"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
      />
    </div>

    <div class="grid gap-4">
      <CardWorkGallery
        title="Ferreira Group"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
      />

      <CardWorkGallery
        title="Ferreira Group"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
      />
    </div>

    <div class="grid gap-4">
      <CardWorkGallery
        title="Ferreira Group"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
        link="/works/ferreira-group"
      />

      <CardWorkGallery
        title="Ferreira Group"
        type="BRANDING"
        source="https://www.nestorhugo.com/assets/img/portfolio/single-project/hipublicidade/hi5.png"
        desc="Ferreira Group Branding"
      />
    </div>
  </div>
</template>

<script>
import CardWorkGallery from "./CardWorkGallery.vue";
export default {
  name: "SomeWorksGallery",
  components: {
    CardWorkGallery,
  },
  props: {},
};
</script>

<style></style>
