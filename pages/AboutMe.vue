<template>
  <section class="sm:px-8 md:px-16 lg:px-48">
    <h1 class="mt-8 text-2xl">About Me</h1>
    <p>I've practiced web development since </p>
    <p>
      In 2018 I completed a Ph.D. in Anthropology and taught several classes at Western Washington Unversity. 
    </p>
  </section>
</template>

<script>
import Navbar from "~/components/Nav.vue";
export default {
  components: {
    Navbar
  },
  head(){
    return{
      title: 'Jake Pfaffenroth - About Me'
    }
  }
};
</script>

<style></style>
