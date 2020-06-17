<template>
  <section class="section">
    <div v-for="project in projects" :key="project.name" class="project-card">
      <!-- <a @click="openModal(project)" class="project-card"> -->
      <img :src="project.image" class="project-image" />
      <div class="text-area">
        <p class="project-stack">{{ project.stack }}</p>
        <h3 class="project-title">{{ project.title }}</h3>
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
              viewBox="0 0 27 27"
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
          ><a :href="project.gitHub" target="blank" class="link-github">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 26 26"
              fill="currentColor"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-github self-end mr-1"
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
import FoodTrucksImg from "~/assets/img/food-truck-ss.png";
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
        FoodTruck: {
          title: "Food Trucks (Native)",
          image: FoodTrucksImg,
          stack: "React Native, Node.js, Express, MongoDB",
          snippet:
            "Team project. I wrote MongoDB data model and account/truck creation, backend user auth, & map display. Users browse/interact with nearby food trucks.",
          gitHub: "https://github.com/phil4lif/FoodTruck"
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
  @apply flex mt-8 mx-2 bg-white border rounded shadow-lg overflow-hidden;
  width: 400px;
  height: 250px;
}

.project-card:hover {
  @apply shadow-xl
}

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
  @apply relative py-2 px-4 w-full;
  display: grid;
  grid-template-rows: 20% auto auto 11%;
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
