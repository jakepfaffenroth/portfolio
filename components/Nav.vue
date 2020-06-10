<template>
  <nav
    class="sticky mx-8 sm:flex justify-between pt-4 space-y-4 sm:space-y-0 bg-white text-center font-display"
  >
    <div class="flex sm:block">
      <div class="self-center">
        <nuxt-link to="/" class="text-xl font-bold">Jake Pfaffenroth</nuxt-link>
        <p class="font-normal">Full stack web developer</p>
      </div>
    </div>

    <!-- Navbar links -->
    <!-- TODO - Make responsive compact menu -->
    <div class="space-x-6">
      <nuxt-link to="/aboutme" class="nav-links">About Me</nuxt-link>
      <nuxt-link to="/projects" class="nav-links">Projects</nuxt-link>
      <a href="https://www.github.com/jakepfaffenroth" class="nav-links"
        >GitHub</a
      >
      <nuxt-link to="/resume" class="nav-links">Resume</nuxt-link>
      <a href="mailto:hello@jakepfaf.dev" class="nav-links"
        >hello@jakepfaf.dev</a
      >
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.nav-links {
  @apply cursor-pointer;
}
</style>
