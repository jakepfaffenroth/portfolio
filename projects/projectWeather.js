import WeatherImg from "~/assets/img/weather-app-ss.jpg";

export default {
  title: "Weather App",
  image: WeatherImg,
  stack: "Vue, Tailwind, Chart.js, Node.js, Express",
  snippet:
    "Mobile-first, fully-responsive web app. Weather forecast is fetched from ClimaCell for device location using Geolocation API, or user-entered search term using HERE geocoding API. Hourly and daily  temp/precip charts made using chart.js. Frontend hosted on Netlify, backend on Google App Engine.",
  description: `I was dissatisfied by existing weather apps (mobile and desktop), so I built the one I wanted. I designed it to be clean, modern, and fully responsive with efficient data presentation.
          It was built using Vue, Tailwind, & Chart.js. Weather data is from Climacell.
          Geolocation data is from HERE.`,
  gitHub: "https://www.github.com/jakepfaffenroth/weather-app",
  live: "https://weather.jakepfaf.dev"
};
