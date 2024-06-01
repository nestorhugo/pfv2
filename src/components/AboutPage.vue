<template>
  <div class="m-5 text-center lg:text-start">
    <div class="flex pb-5 flex-col lg:flex-row items-center">
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
      <div class="lg:w-7/12 flex">
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

    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-5/12 pb-5 pr-6">
        <h1 class="text-4xl font-bold pb-2">About</h1>
        <p class="text-base md:text-xl pb-5">
          I'm a developer, designer, and student based in Paraná, Brazil. My
          passion for technology fuels my constant quest to learn new
          programming skills. I'm enthusiastic about how technology and
          programming can transform our world, and I'm dedicated to continually
          growing in this exciting field.
        </p>

        <h1 class="text-4xl font-bold pb-2">Design</h1>
        <p class="text-base md:text-xl pb-5">
          Since 2019, I've gained over four years of experience in design,
          working on a variety of projects from social media to corporate
          design, including creating compelling visual identities. I've had a
          deep interest in art from a young age and have always channeled my
          creativity into my work.
        </p>

        <h1 class="text-4xl font-bold pb-2">Development</h1>
        <p class="text-base md:text-xl pb-5">
          In 2021, I started an exciting journey into programming by enrolling
          at the Federal Technologic University of Paraná. Since then, my
          passion for technology and coding has grown immensely, leading me to
          dive deep into web development. In 2023, I began my career as a
          Fullstack Developer at FiqOn. There, I also got the chance to work as
          a Software Project Manager on the Systems Integration team. Now, I’m
          currently working as a Frontend Developer on the product team.
        </p>
      </div>
      <div class="lg:w-7/12">
        <h1 class="text-4xl font-bold pb-2">Timeline</h1>
        <TimelineAbout />
      </div>
    </div>
  </div>
</template>

<script>
import CardWorkGallery from "./CardWorkGallery.vue";
import TimelineAbout from "./TimelineAbout.vue";

export default {
  name: "AboutPage",
  components: { CardWorkGallery, TimelineAbout },
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
