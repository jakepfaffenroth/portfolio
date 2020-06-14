<template>
  <section class="section">
    <div v-for="project in projects" :key="project.name">
      <a @click="openModal(project)" class="project-card">
        <img :src="project.image" class="project-image" />
        <div class="text-area">
          <p class="project-stack">{{ project.stack }}</p>
          <h3 class="project-title">{{ project.title }}</h3>
          <p class="project-snippet">
            {{ project.snippet }}
          </p>
          <div class="project-links">
            <a v-if='project.live' :href="project.live" class="link-live"> Live </a
            ><a :href="project.gitHub" class="link-github"> GitHub </a>
          </div>
        </div>
      </a>
    </div>
    <!-- <Transition name="pop" mode="out-in"> -->
    <project-modal
      :project="project"
      v-show="isVisible"
      v-on:hideModal="hideModal"
      class="-ml-0"
    />
    <!-- </Transition> -->
  </section>
</template>

<script>
import Navbar from "~/components/Nav.vue";
import WeatherImg from "~/assets/img/weather-app-ss.png";
import DrawImg from "~/assets/img/draw-ss.png";
import PortfolioImg from "~/assets/img/portfolio-ss.png";
import ProjectModal from "~/components/ProjectModal.vue";

export default {
  head() {
    return {
      title: "Jake Pfaffenroth - Projects"
    };
  },
  components: {
    Navbar,
    ProjectModal
  },
  data() {
    return {
      isVisible: false,
      project: {},
      projects: {
        weather: {
          title: "Weather App",
          image: WeatherImg,
          stack: "Vue.js, Tailwind, Chart.js, Node.js, Express",
          snippet:
            "A clean, mobile-first web app built using Vue, Node.js, and APIs from Climacell and HERE.",
          description: `I was dissatisfied by existing weather apps (mobile and desktop), so I built the one I wanted. I designed it to be clean, modern, and fully responsive with efficient data presentation.
          It was built using Vue.js, Tailwind.css, & Chart.js. Weather data is from Climacell.
          Geolocation data is from HERE.`,
          gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
          live: "https://weather.jakepfaf.dev"
        },
        portfolio: {
          title: "Portfolio",
          subtitle: "You are here",
          image: PortfolioImg,
          stack: "Vue.js, Tailwind",
          snippet:
            "You are here. Responsive SPA with basic routing and page transitions.",
          notes:
            "My personal portfolio. Responsive SPA with basic routing and page transitions.",
          gitHub: "https://www.github.com/jakepfaffenroth/portfolio"
        },
        draw: {
          title: "Draw",
          image: DrawImg,
          stack: "HTML, CSS, JS",
          snippet: "A simple drawing app made with HTML, Javascript, and CSS.",
          gitHub: "https://www.github.com/jakepfaffenroth/Draw",
          live: "https://draw.jakepfaf.dev"
        }
      }
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

<style>
.section {
  @apply flex flex-wrap justify-center text-center;
}

.project-card {
  @apply flex mt-8 mx-2 bg-white border rounded shadow-lg transition duration-150 ease-in-out;
  width: 400px;
  height: 200px;
}

.project-card:hover {
  @apply cursor-pointer shadow-2xl border-gray-400;
}

.project-image {
  @apply object-cover object-left-top;
  width: 40%;
}
.text-area {
  @apply relative py-2 px-4 w-full;
  display: grid;
  grid-template-rows: 25% auto auto 12%;
}

.project-title {
  @apply row-start-2 align-text-top text-xl;
}

.project-stack {
  @apply row-start-1 mb-1 text-sm font-light;
}

.project-snippet {
  @apply row-start-3 text-sm font-light;
}

.project-links {
  @apply row-start-4 flex text-sm font-light mx-6 justify-around;
}

.link-live,
.link-github {
  @apply transition duration-150 ease-in-out;
}

.link-live:hover {
  @apply cursor-pointer text-green-600;
}

.link-github:hover {
  @apply cursor-pointer text-orange-600;
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
