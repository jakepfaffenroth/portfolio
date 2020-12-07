import carouselImg from "~/assets/img/carousel-ss.jpg";

export default {
  title: "Photo Sharing Platform",
  image: carouselImg,
  stack: "Vue 3, Tailwind, Node.js, Express, Postgres, Redis, Backblaze B2, AWS SES/SNS",
  snippet:
    "Users create private photo galleries that can be shared via a unique link. Recipients can view shared galleries and receive notifications without creating their own accounts. Backend image processing is optimized using data streams and a redis queue system. Client-server communication is via RESTful api. Frontend hosted on Netlify, backend on Digital Ocean droplet.",
  description: '',
  gitHub: "https://www.github.com/jakepfaffenroth/family-sharing-app",
  live: "https://carousel.jakepfaf.dev"
};
