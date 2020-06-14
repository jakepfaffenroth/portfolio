<template>
  <div>
    <nav class=" nav flex space-y-4 sm:space-y-0 bg-white">
      <!-- full nav bar -->
      <div class="flex sm:block">
        <div class="text-left self-center">
          <nuxt-link to="/" class="title text-xl font-bold">
            Jake Pfaffenroth
            <span class="text-sm font-thin" v-if="$route.name !== 'index'">
              / {{ $route.name.toLowerCase() }}</span
            ></nuxt-link
          >
          <p class="text-left -mt-2 md:-mt-1">Full stack web developer</p>
        </div>
      </div>
      <!-- Mobile nav button -->
      <!-- <button class="md:hidden absolute top-auto right-0" @click="openMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-menu"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button> -->

      <!-- Navbar links -->
      <div class="hidden md:block space-x-6 self-center">
        <!-- <nuxt-link to="/aboutme" class="nav-links">About Me</nuxt-link> -->
        <nuxt-link to="/projects" class="nav-links">Projects</nuxt-link>
        <a
          href="https://www.github.com/jakepfaffenroth"
          target="blank"
          class="nav-links"
          >GitHub</a
        >
        <nuxt-link to="/skills" class="nav-links">Skills</nuxt-link>
        <nuxt-link to="/resume" class="nav-links">Resume</nuxt-link>
        <a href="mailto:hello@jakepfaf.dev" target="blank" class="nav-links"
          >hello@jakepfaf.dev</a
        >
      </div>
    </nav>
    <!-- Mobile menu -->
    <div
      class="md:hidden w-screen flex flex-wrap justify-around mt-0 px-2 py-3 text-sm font-light shadow"
    >
      <!-- <nuxt-link to="/aboutme" class="nav-links">About Me</nuxt-link> -->
      <nuxt-link to="/projects" class="nav-links">Projects</nuxt-link>
      <a
        href="https://www.github.com/jakepfaffenroth"
        target="blank"
        class="nav-links"
        >GitHub</a
      >
      <nuxt-link to="/skills" class="nav-links">Skills</nuxt-link>
      <nuxt-link to="/resume" class="nav-links">Resume</nuxt-link>
      <a href="mailto:hello@jakepfaf.dev" target="blank" class="nav-links"
        >hello@jakepfaf.dev</a
      >
    </div>
    <!-- 'Scroll to top' button -->
    <!-- <button
      class="md:hidden fixed bottom-0 right-0 m-4 p-1 border rounded-full bg-blue-500 text-white shadow"
      @click.native="scrollToTop()"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    </button> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false
    };
  },
  methods: {
    // scrollToTop() {
    //   window.scrollTo(0, 0);
    // }
  }
};
</script>

<style>
/* .title:hover {
  @apply cursor-pointer border-b-2 border-blue-500 transition duration-100 ease-in-out;
} */

.nav {
  @apply sticky mx-5 justify-between pt-4 bg-white text-center font-display;
}

/* Transparent bottom border to preserve spacing when blue b-border is applied on hover */
.nav-links {
  @apply cursor-pointer border-b-2 border-transparent;
}

.nav-links:hover {
  @apply border-b-2 border-blue-500 transition duration-150 ease-in-out;
}

/* Page transitions */
.drop-enter,
.drop-leave-to {
  transform: translate(0, -2em);
  opacity: 0;
}

.drop-enter-to,
.drop-leave {
  opacity: 1;
  transform: translate(0, 0);
}

.drop-enter-active,
.drop-leave-active {
  transition-duration: 0.8s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
</style>
