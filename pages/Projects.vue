<template>
  <main class="mx-4 md:mx-8 mt-4 mb-20">
    <section class="mb-10">
      <h1 class="text-2xl md:text-3xl font-display">Featured Projects</h1>
      <div class="flex flex-wrap -ml-3">
        <featured-project-card
          :project="projects.photoSharing"
        ></featured-project-card>
        <featured-project-card
          :project="projects.weather"
        ></featured-project-card>
      </div>
    </section>
    <section>
      <h1 class="text-2xl font-display">Other Projects</h1>
      <div class="flex flex-wrap -ml-3">
        <project-card :project="projects.short"></project-card>
        <project-card :project="projects.csvReformatter"></project-card>
        <project-card :project="projects.foodTruck"></project-card>
        <project-card :project="projects.portfolio"></project-card>
        <project-card :project="projects.draw"></project-card>
        <div
        v-show="false"
          v-for="project in projects"
          :key="project.name"
          class="project-card"
        >
          <!-- <a @click="openModal(project)" class="project-card"> -->
          <img :src="project.image" class="project-image" />
          <div class="text-area">
            <p class="project-stack">{{ project.stack }}</p>
            <h2 class="project-title">{{ project.title }}</h2>
            <p class="project-snippet">
              {{ project.snippet }}
            </p>
            <div class="project-links">
              <a
                v-if="project.live"
                :href="project.live"
                target="blank"
                class="link-live"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 26 22"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-link self-end mr-1"
                >
                  <path
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                  ></path>
                  <path
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                  ></path>
                </svg>
                Live </a
              ><a
                :href="project.gitHub"
                target="blank"
                class="flex link-github"
              >
                <svg
                  class="w-3 h-3 mr-1 mt-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 21"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path
                    d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                  ></path>
                </svg>
                GitHub
              </a>
            </div>
          </div>
          <!-- </a> -->
        </div>
      </div>
    </section>
    <!-- <Transition name="pop" mode="out-in"> -->
    <project-modal
      :project="project"
      v-show="isVisible"
      v-on:hideModal="hideModal"
      class="-ml-0"
    />
    <!-- </Transition> -->
  </main>
</template>

<script>
import Navbar from "~/components/Nav";
import WeatherImg from "~/assets/img/weather-app-ss.jpg";
import DrawImg from "~/assets/img/draw-ss.jpg";
import FoodTrucksImg from "~/assets/img/food-truck-ss.jpg";
import PortfolioImg from "~/assets/img/portfolio-ss.jpg";
import ProjectModal from "~/components/ProjectModal";
import projects from "~/projects";
import ProjectCard from "~/components/ProjectCard";
import FeaturedProjectCard from "~/components/ProjectCardFeatured";

export default {
  head() {
    return {
      title: "Jake Pfaffenroth - Projects"
    };
  },
  components: {
    Navbar,
    ProjectCard,
    FeaturedProjectCard,
    ProjectModal
  },
  data() {
    return {
      isVisible: false,
      project: {},
      projects: projects
    };
  },
  methods: {
    openModal(project) {
      this.project = project;
      this.isVisible = !this.isVisible;
    },
    hideModal() {
      this.isVisible = false;
    }
  }
};
</script>

<style scoped>
.section {
  @apply flex flex-wrap justify-center mb-20 text-center;
}

/* .project-card {
  @apply flex mt-4 md:mt-8 mx-2 bg-white border rounded shadow-lg overflow-hidden;
  width: 400px;
  height: 250px;
} */

/* .project-card:hover {
  @apply shadow-xl
} */

.project-card:hover .link-live {
  @apply text-orange-500 transition-all duration-100 ease-in-out;
  text-shadow: 0 0 0.5px #ed8936;
}
.project-card:hover .link-github {
  @apply text-purple-600 transition-all duration-100 ease-in-out;
  text-shadow: 0 0 0.5px #9f7aea;
}

.project-image {
  @apply object-cover object-left-top border-r;
  width: 45%;
}
.text-area {
  @apply relative py-2 px-3 w-full;
  display: grid;
  grid-template-rows: 20% auto auto 8%;
}

.project-title {
  @apply row-start-2 align-text-top text-xl;
}

.project-stack {
  @apply row-start-1 mb-1 text-sm font-light text-gray-700;
}

.project-snippet {
  @apply row-start-3 text-sm font-light;
}

.project-links {
  @apply row-start-4 flex text-sm font-normal mx-6 justify-around tracking-wide;
}

/* .link-live,
.link-github {
  @apply transition duration-150 ease-in-out;
}
*/

.link-live,
.link-github {
  /* transparent bottom border to preserve spacing on hover*/
  @apply flex border-b-2 border-transparent;
}

.link-live:hover,
.link-github:hover {
  @apply cursor-pointer  border-b-2 transition-all duration-75 ease-in-out;
}
.link-live:hover {
  @apply border-orange-500;
}

.link-github:hover {
  @apply border-purple-500;
}

/* Project Modal transitions */
.pop-enter,
.pop-leave-to {
  transform: scale(0.7);
  opacity: 0;
}

.pop-enter-to,
.pop-leave {
  opacity: 1;
  transform: scale(1);
}

.pop-enter-active,
.pop-leave-active {
  transition-duration: 0.5s;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.55, 0, 0.1, 1);
  overflow: hidden;
}
</style>
