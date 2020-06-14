<template>
  <div>
    <nav class=" nav flex space-y-4 sm:space-y-0 bg-white">
      <!-- full nav bar -->
      <div class="flex sm:block">
        <div class="text-left self-center">
          <nuxt-link to="/" class="text-xl font-bold">
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
        <a href="https://www.github.com/jakepfaffenroth" class="nav-links"
          >GitHub</a
        >
        <nuxt-link to="/skills" class="nav-links">Skills</nuxt-link>
        <nuxt-link to="/resume" class="nav-links">Resume</nuxt-link>
        <a href="mailto:hello@jakepfaf.dev" class="nav-links"
          >hello@jakepfaf.dev</a
        >
      </div>
    </nav>
    <!-- Mobile menu -->
    <transition name="drop">
      <div
        class="md:hidden w-screen flex flex-wrap justify-around mt-0 px-2 py-3 bg-white text-sm font-light shadow z-40"
      >
        <!-- <nuxt-link to="/aboutme" class="nav-links">About Me</nuxt-link> -->
        <nuxt-link to="/projects" class="nav-links">Projects</nuxt-link>
        <a href="https://www.github.com/jakepfaffenroth" class="nav-links"
          >GitHub</a
        >
        <nuxt-link to="/skills" class="nav-links">Skills</nuxt-link>
        <nuxt-link to="/resume" class="nav-links">Resume</nuxt-link>
        <a href="mailto:hello@jakepfaf.dev" class="nav-links"
          >hello@jakepfaf.dev</a
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenuOpen: false,
    };
  },
  methods: {
    openMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    }
  },
};
</script>

<style>
.nav {
  @apply sticky mx-5 justify-between pt-4 bg-white text-center font-display;
}

.nav-links {
  @apply cursor-pointer;
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
