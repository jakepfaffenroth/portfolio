<template>
  <div>
    <section class="h-screen sm:px-8 md:px-16 lg:px-48">
      <link
        href="https://fonts.googleapis.com/css2?family=Crimson+Text:wght@400;600;700&family=Lato:wght@100;300;400;700&display=swap"
        rel="stylesheet"
      />
      <header
        class="sticky sm:flex justify-between pt-4 space-y-4 sm:space-y-0 bg-white text-center font-display"
      >
        <div class="flex sm:block">
          <photo class="block sm:hidden h-20 w-20 mx-12 rounded-full" />

          <div class="self-center">
            <a href="#me" class="text-xl font-bold">Jake Pfaffenroth</a>
            <p class="font-normal">Full stack web developer</p>
          </div>
        </div>

        <!-- Navbar links -->
        <!-- TODO - Make responsive compact menu -->
        <nav class="space-x-6">
          <a v-for="(value, name, index) in navLinks" :key="value">
            <a :id="'nav-link-' + index" :href="value.link" class="nav-links">{{
              value.name
            }}</a>
          </a>
        </nav>
      </header>

      <div id="hello" class="flex px-4 sm:px-0 sm:pt-12 space-x-12">
        <photo
          class="col-start-1 hidden sm:block self-start h-auto w-auto sm:h-56 sm:w-56 mt-2 rounded-full"
        />
        <div
          id="hello-text"
          class="col-start-2 lg:pr-32 md:text-md font-light font-body text-gray-900"
        >
          <p class="text-3xl sm:text-4xl font-display  ">
            Hello
          </p>
          <p>
            I'm a full stack web developer with diverse range of experience
            including higher education, non-profit leadership, and photography.
            I'm interested in lots of things, and when I want to learn something
            I dive in head-first. In 2018 I completed a Ph.D. in Anthropology
            and, after teaching in higher education for several years, decided
            to pursue web development.
          </p>
          <br />
          <p>
            I'm passionate about learning new skills and science education.<br /><br /><br />
          </p>
          <!-- <portfolio-links class="flex mt-6 justify-center space-x-4" /> -->
        </div>
      </div>
      <!-- Tech Stack Row -->
      <div id="stack" class="stack w-full sm:px-8 space-x-6">
        <p class="p-1 sm:p-2" v-for="tech in techStack" :key="tech">
          {{ tech.name }}
        </p>
      </div>
    </section>
    <!-- Projects anchor tag -->
    <!-- <a id="projects"></a> -->
    <projects id="projects" />
    <!-- <a id="resume"></a> -->
    <!-- <resume /> -->
  </div>
</template>

<script>
import VueLogo from "~/assets/img/vue-logo.svg";
import Photo from "~/components/Photo.vue";
import Projects from "~/components/Projects.vue";
import Resume from "~/components/Resume.vue";

export default {
  components: {
    Photo,
    Projects,
    Resume
  },
  data() {
    return {
      navLinks: {
        me: { id: "me", name: "Me", link: "#me" },
        gitHub: {
          id: "github",
          name: "GitHub",
          link: "https://www.github.com/jakepfaffenroth"
        },
        projects: { id: "projects", name: "Projects", link: "#projects" },
        resume: { id: "resume", name: "Resume", link: "#resume" },
        email: {
          id: "email",
          name: "hello@jakepfaf.dev",
          link: "mailto:hello@jakepfaf.dev"
        }
      },
      techStack: {
        html5: { name: "HTML5", img: VueLogo },
        css3: { name: "CSS3", img: VueLogo },
        js: { name: "Javascript", img: VueLogo },
        vue: { name: "Vue.js", img: VueLogo },
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        sql: { name: "SQL", img: "" }
      },
      techStackFE: {
        html5: { name: "HTML5", img: VueLogo },
        css3: { name: "CSS3", img: VueLogo },
        js: { name: "Javascript", img: VueLogo },
        vue: { name: "Vue.js", img: VueLogo }
      },
      techStackBE: {
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        sql: { name: "SQL", img: "" }
      }
    };
  }
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

html {
  @apply font-body;
  scroll-behavior: smooth;
}

h1,
h2,
h3,
h4,
h5 {
  @apply font-display;
}

#hello {
  display: grid;
  grid-template-rows: 1fr, 3fr;
}

.stack {
  @apply flex flex-wrap px-2 justify-center;
}
</style>
