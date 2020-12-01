<template>
  <div>
    <nav class="nav md:flex md:space-y-4 sm:space-y-0 bg-white">
      <!-- Site Title -->
      <div class="ml-4 md:ml-8 text-left self-center">
        <nuxt-link to="/" class="title text-xl font-bold">
          Jake Pfaffenroth
        </nuxt-link>
        <h1
          class="inline-block text-sm font-thin"
          v-if="$route.name !== 'index'"
        >
          <span class="text-blue-500 font-black">/</span> {{ $route.name.toLowerCase() }}
        </h1>
        <p class="text-left -mt-2 md:-mt-1">Full stack web developer</p>
      </div>

      <!-- Navbar links -->
      <div class="flex flex-wrap justify-between mt-0 px-4 py-3 font-body text-sm font-light shadow md:flex-nowrap md:space-x-6 md:self-center md:mr-8 md:text-base md:font-normal md:shadow-none md:font-display">
        <!-- <nuxt-link to="/aboutme" class="nav-links">About Me</nuxt-link> -->
        <nuxt-link to="/" class="nav-links">Home</nuxt-link>
        <nuxt-link to="/projects" class="nav-links">Projects</nuxt-link>
        
        <!-- <nuxt-link to="/skills" class="nav-links">Skills</nuxt-link> -->
        <a href="/Pfaffenroth_Resume.pdf" download="" class="nav-links">
        <!-- <svg class="menu-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line>
        </svg> -->
        <span class="inline-block">Resume</span>
          </a>
        
        <a href="mailto:hello@jakepfaf.dev" target="blank" class="nav-links"
          >
          <svg class="menu-icon mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <span class="block">hello@jakepfaf.dev</span>
          </a
        >
        <div id="social-links" class="flex md:space-x-4">
        <a
          href="https://www.github.com/jakepfaffenroth"
          target="blank"
          class="nav-links"
        >
        <svg class='menu-icon mr-0' viewBox="0 0 16 16" fill="currentColor">
            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
          </svg>
          <span class="hidden">GitHub</span>
          </svg>
          </a>
        <a
          href="https://www.linkedin.com/in/jake-pfaffenroth-44675a123/"
          target="blank"
          class="nav-links"
        >
        <svg class="menu-icon mr-0" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          <span class="hidden">LinkedIn</span>
          </svg>
          </a>
        </div>
      </div>
    </nav>
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
.menu-icon {
  @apply my-auto w-4 h-4;
}

.nav {
  @apply sticky justify-between pt-4 bg-white text-center font-display;
}

/* Transparent bottom border to preserve spacing when blue b-border is applied on hover */
.nav-links {
  @apply flex cursor-pointer border-b-2 border-transparent;
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
