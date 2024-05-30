<template>
  <button
    data-drawer-target="logo-sidebar"
    data-drawer-toggle="logo-sidebar"
    aria-controls="logo-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>

  <aside
    id="logo-sidebar"
    class="fixed top-0 left-0 z-40 w-48 h-screen transition-transform -translate-x-full sm:translate-x-0"
    aria-label="Sidebar"
  >
    <div
      class="h-full px-3 py-4 overflow-y-auto bg-white border-r border-gray-200 dark:bg-gray-800"
    >
      <a href="/" class="flex items-center ps-2.5 mb-5 pt-5">
        <img
          src="./../assets/nestor-logo.svg"
          class="h-20 me-3 sm:h-20"
          alt="Nestor Hugo Logo"
        />
      </a>

      <ul class="space-y-2 text-2xl pb-5">
        <li class="link">
          <a href="/about" class="p-2">about</a>
        </li>
        <li class="link">
          <a href="/works" class="p-2">works</a>
        </li>
      </ul>

      <p class="subtext p-2 space-y-2 text-sm text-gray-400">CONTACT</p>
      <ul class="space-y-2 text-lg pb-5">
        <li class="link">
          <a href="mailto:nestorhugo@proton.me" class="p-2">mail</a>
        </li>
        <li class="link">
          <a
            href="https://www.linkedin.com/in/nestorhugo/"
            target="_blank"
            class="p-2"
            >linkedin</a
          >
        </li>
      </ul>

      <p class="subtext p-2 space-y-2 text-sm text-gray-400">SEE ALSO</p>
      <ul class="space-y-2 text-lg pb-5">
        <li class="link">
          <a href="https://github.com/nestorhugo" target="_blank" class="p-2"
            >github</a
          >
        </li>
        <li class="link">
          <a
            href="https://www.behance.net/nestorhugo"
            target="_blank"
            class="p-2"
            >behance</a
          >
        </li>
      </ul>
    </div>
  </aside>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    msg: String,
  },
};
</script>

<style>
.link {
  transition: all 0.3s ease;
  color: black;
  transform: translateY(0);
}

.link:hover {
  color: #606060;
  transform: translateY(-5px);
}
</style>
