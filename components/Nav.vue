<template>
  <nav
    class="sticky mx-8 sm:flex justify-between pt-4 space-y-4 sm:space-y-0 bg-white text-center font-display"
  >
    <div class="flex sm:block">
      <!-- <photo class="block sm:hidden h-20 w-20 mx-12 rounded-full" /> -->

      <div class="self-center">
        <button @click="followLink('', 'welcome')" class="text-xl font-bold">
          Jake Pfaffenroth
        </button>
        <p class="font-normal">Full stack web developer</p>
      </div>
    </div>

    <!-- Navbar links -->
    <!-- TODO - Make responsive compact menu -->
    <div class="space-x-6">
      <a v-for="(value, name, index) in navLinks" :key="value">
        <button
          @click="followLink(value.link, value.id)"
          :id="'nav-link-' + index"
          :href="value.link"
          class="nav-links"
        >
          {{ value.name }}
        </button>
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navLinks: {
        aboutMe: { id: "aboutMe", name: "About Me", link: "" },
        projects: { id: "projects", name: "Projects", link: "" },
        gitHub: {
          id: "github",
          name: "GitHub",
          link: "https://www.github.com/jakepfaffenroth"
        },
        resume: { id: "resume", name: "Resume", link: "" },
        email: {
          id: "email",
          name: "hello@jakepfaf.dev",
          link: "mailto:hello@jakepfaf.dev"
        }
      }
    };
  },
  methods: {
    followLink(link, id) {
      if (link.match(/mailto/)) {
        return (window.location.href = link);
      } else if (link && link.match(/mailto/) == null) {
        return window.open(link);
      } else {
        this.$emit("change-page", id);
      }
    }
  }
};
</script>

<style>
.nav-links {
  @apply cursor-pointer;
}
</style>
