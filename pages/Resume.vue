<template>
  <!-- TODO - add skills section to col-4 or cut the grid entirely -->
  <!-- Make responsive -->
  <section class="grid grid-cols-4 m-8 h-screen font-light space-y-6">
    <div class="col-start-1  col-span-4">
      <h3 class="resume-header">EDUCATION</h3>
      <div class="content-block">
        <div>
          <p class="font-normal">Ph.D. - Anthropology</p>
          <p class="italic">University of Wisconsin - Madison</p>
          <!-- <p class="relative right-0">2018</p> -->
        </div>
        <div class="text-sm">
          <p>2018</p>
        </div>
      </div>
    </div>

    <div class="col-start-1 col-span-4" v-for="job in jobs" :key="job.title">
      <h3 class="resume-header" v-if="job.header">{{ job.header }}</h3>
      <div class="content-block">
        <div>
          <p class="font-normal">{{ job.title }}</p>
          <p class="italic">{{ job.employer }}</p>
          <p></p>
        </div>
        <div class="text-sm text-right">
          <p>{{ job.date }}</p>
          <p>{{ job.location }}</p>
        </div>
      </div>
      <!-- <p class="flex text-sm" @click="isVisible = !isVisible">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 22"
          fill="none"
          stroke="currentColor"
          stroke-width="1.75"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-chevron-down"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
        Details
      </p> -->
      <transition name="fold" mode="out-in">
        <ul class="mr-32" v-for="li in job.ul" :key="li">
          <li>{{ li }}</li>
        </ul>
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isVisible: false,
      jobs: {
        1: {
          header: "EMPLOYMENT HISTORY",
          title: "Non-Tenure Track Faculty",
          employer: "Western Washington University",
          date: "2018 to present",
          location: "Bellingham, WA",
          ul: {
            1: "Independently develop and teach three undergraduate anthropology courses that intersect with science and humanities for classes ranging in size from 10 to 80 students.",
            2: "I engage students in learning, critical thinking, and interpretation through diverse methods including oral/visual presentations, group work and discussion, online resources, one-on-one instruction, exams, and assignments."
          }
        },
        2: {
          header: "",
          title: "Freelance Photographer",
          employer: "Jake Pfaffenroth Photography",
          date: "2016 to present",
          location: "Bellingham, WA & Madison, WI",
          ul: {
            1: "Manage sales, digital marketing (website, Google Analytics, Adwords; Facebook Ads Manager; Instagram business account), bookkeeping, client contracts and model releases, equipment purchasing, and digital archives.",
            2: "Provide exceptional, individualized customer service."
          }
        },
        3: {
          header: "",
          title: "Project Co-Director",
          employer: "University of Wisconsin",
          date: "2014-2016",
          location: "Madison, WI",
          ul: {
            1: "Designed and implemented a two-year, scientific research project (secured permits and funding through grant-writing; created budgets and purchased supplies; organized conference symposium; coordinated with state and university agencies; wrote technical reports for submission to state agencies).",
            2: "Created project website for public education (https://schroeder.labs.wisc.edu/ -- static HTML and CSS)"
          }
        },
        4: {
          header: "",
          title: "Graduate Teaching Assistant (Senior status 2015-2016)",
          employer: "University of Wisconsin",
          date: "2013-2016",
          location: "Madison, WI",
          ul: {
            1: "Developed and led weekly discussion groups of approximately 20 students each in which I engaged students in learning, critical thinking, and data analysis through diverse methods including oral/visual presentations, group work and discussion, online resources, one-on-one instruction, exams, and assignments."
          }
        },
        5: {
          header: "",
          title: "Project Supervisor",
          employer: "University of Wisconsin",
          date: "2013",
          location: "Madison, WI",
          ul: {
            1: "Assisted project directors with managing logistics, supervising personnel, evaluating quality of work, and producing a final technical report submitted to state agencies."
          }
        },
        6: {
          header: "",
          title: "Chair, Web and Social Media Committee",
          employer: "Wisconsin Archeological Society",
          date: "2012-2016",
          location: "Madison, WI",
          ul: {
            2: "Initiated a modernization of the society’s website, e-commerce, Facebook, and email list. Led a team in analyzing and reporting on web traffic and revenue using analytics, maintaining the website, and creating content."
          }
        },
        7: {
          header: "",
          title: "Director and Secretery",
          employer: "Wisconsin Archeologicla Society",
          date: "2010-2016",
          location: "Madison, WI",
          ul: {
            1: "Worked with fellow board members to create annual budgets and otherwise manage the organization. Recorded meeting minutes and board votes, conducted elections, kept knowledge of the organization's constitution and by-laws, and archived physical and digital documents for posterity."
          }
        },
        8: {
          header: "",
          title: "Project Supervisor",
          employer: "University of Wisconsin System",
          date: "2010",
          location: "Madison, WI",
          ul: {
            1: "Assisted project directors with day-to-day operations including managing logistics, documenting daily progress, supervising student personnel, and evaluating work quality."
          }
        }
      }
    };
  },
  methods: {
    toggleDetails(ul) {
      this.isVisible = !this.isVisible;
    }
  }
};
</script>

<style>
.resume-header {
  @apply font-semibold border-b;
}

.content-block {
  @apply flex justify-between w-full;
}

ul {
  padding-left: 1rem;
  list-style-type: disc;
  list-style-position: outside;
}

li {
  @apply mt-2 text-sm;
}

</style>
