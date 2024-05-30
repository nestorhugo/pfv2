<template>
  <div>
    <a :href="link">
      <img
        class="h-auto max-w-full rounded-lg transform transition duration-500 hover:scale-105 hover:shadow-lg"
        :src="source"
        :alt="desc"
      />
    </a>
    <p class="text-xl pt-1">{{ title }}</p>
    <p class="text-sm text-gray-400">{{ type }}</p>
  </div>
</template>

<script>
export default {
  name: "CardWorkGallery",
  props: {
    title: String,
    type: String,
    source: String,
    desc: String,
    link: String,
  },
};
</script>

<style></style>
