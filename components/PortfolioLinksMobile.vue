<template>
  <portfolio-links-mobile />
</template>

<script>
import PortfolioLinksMobile from "~/components/PortfolioLinksMobile.vue";

export default {
  components: {
    PortfolioLinksMobile
  }
};
</script>

<style>
.btn {
  @apply w-24 py-1 px-1 text-sm border text-gray-900 bg-white rounded shadow  transition duration-150 ease-in-out;
}
.btn-green:hover {
  @apply border-green-500 bg-white text-gray-900;
}

.btn-green {
  @apply bg-green-600 text-white;
}

.btn-orange:hover {
  @apply border-orange-500 bg-white text-gray-900;
}

.btn-orange {
  @apply bg-orange-600 text-white;
}

.btn-yellow:hover {
  @apply border-yellow-500 bg-white text-gray-900;
}

.btn-yellow {
  @apply bg-yellow-500 border-yellow-400 text-gray-800;
}
</style>
