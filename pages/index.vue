<template>
  <section class="sm:px-8 md:px-16 lg:px-32 xl:px-56">
    <div
      id="hello"
      class="flex flex-col sm:flex-row px-4 sm:px-0 sm:pt-12 sm:space-x-12"
    >
      <photo
        class="col-start-1 m-auto self-start h-32 w-32 sm:h-56 sm:w-56 mt-2 rounded-full"
      />
      <div
        id="hello-text"
        class="sm:col-start-2 lg:pr-32 md:text-md font-light font-body text-gray-900 text-center sm:text-left "
      >
        <h1 class="my-2 sm:mt-0 text-3xl sm:text-4xl font-display  ">
          Hello
        </h1>
        <p>
          I'm a full stack web developer with a social science Ph.D. I love
          finding creative solutions to problems, I'm motivated to continuously
          learn, and I have a proven history of self-teaching diverse subject
          matter.
        </p>
        <p class="py-4">
          My professional experience spans higher education, non-profit
          leadership, and small business, and I've been creating web solutions
          in these fields since 2012. The sites I create are responsive and
          modern with intuitive, asthetic design.
        </p>
        <!-- <p>
          Thanks for visiting.
        </p> -->
        <!-- <portfolio-links class="flex mt-6 justify-center space-x-4" /> -->
      </div>
    </div>
    <div
      class="mt-2 md:mt-4 sm:mt-20 px-4 md:px-20 lg:px-24 xl:px-36 font-light text-center"
    >
      <p>
        I usually build web apps using
        <span class="text-emerald-600 font-semibold">Vue</span> and
        <span class="text-cyan-500 font-semibold">Tailwind</span>.
      </p>
      <p>
        In the backend I pair
        <span class="text-green-500 font-semibold">Node.js</span> and
        <span class="text-blue-600 font-semibold">Express</span> with
        <span class="text-lightBlue-700 font-semibold">PostgreSQL</span>.
      </p>
      <p>
        I've also used
        <span class="text-cyan-500 font-semibold">React</span>,
        <span class="text-green-800 font-semibold">MongoDB</span>, and
        <span class="text-red-700 font-semibold">Redis</span>.
      </p>
      <p>
        Rounding out the basics, I know
        <span class="text-purple-600 font-semibold">vanilla javascript</span>,
        <span class="text-orange-600 font-semibold">HTML5</span>,
        <span class="text-blue-600 font-semibold">CSS3</span>,
        <span class="text-orange-600  font-semibold">git</span>, and
        <span class="text-emerald-500 font-semibold">Jest</span>.
      </p>
    </div>
  </section>
</template>

<script>
import Photo from "~/components/Photo.vue";
import PortfolioLinks from "~/components/PortfolioLinks.vue";

export default {
  head() {
    return {
      title: "Jake Pfaffenroth"
    };
  },
  components: {
    Photo
    // PortfolioLinks
    // AboutMe,
    // Projects,
    // Resume
  },
  data() {
    return {
      techStack: {
        html5: { name: "HTML5", img: "" },
        css3: { name: "CSS3", img: "" },
        js: { name: "Javascript", img: "" },
        vue: { name: "Vue", img: "" },
        tailwind: { name: "Tailwind", img: "" },
        bootstrap: { name: "Bootstrap", img: "" },
        chartjs: { name: "Chart.js", img: "" },
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        firebase: { name: "Firebase", img: "" }
      },
      techStackFE: {
        html5: { name: "HTML5", img: "" },
        css3: { name: "CSS3", img: "" },
        js: { name: "Javascript", img: "" },
        vue: { name: "Vue", img: "" }
      },
      techStackBE: {
        express: { name: "Express", img: "" },
        nodejs: { name: "Node.js", img: "" },
        mongodb: { name: "MongoDb", img: "" },
        sql: { name: "SQL", img: "" }
      }
    };
  }
  // computed:{
  //   component (){
  //     switch (this.page){
  //       case
  //     }
  //   }
  // },
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
  @apply flex flex-wrap justify-center w-full;
}
</style>
