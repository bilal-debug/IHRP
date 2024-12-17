<script setup>
import InfoCard from "@/components/commonComponents/cards/InfoCard.vue";

const chokas_mokas = [
  {
    label: "Insights from Industry Leaders",
    description:
      "Hear from Mr. Irving Tan, Executive Vice President for Global Operations at Western Digital, as he delivers his business keynote on driving business excellence.",
  },

  {
    label: "Exclusive SME Success Track",
    description:
      "Our first-ever SME Success Track offers actionable insights and best practices to leverage on human capital to drive productivity, profitability and grow for SMEs.",
  },

  {
    label: "Connect with Over 700 Professionals",
    description:
      "Network with Business and HR leaders, industry thought leaders, and like-minded professionals dedicated to uplifting human capital and delivering business outcomes.",
  },
];
</script>
<template>
  <div class="grid grid-cols-1 md:grid-cols-2 place-items-center mt-9">
    <div><img src="../../../assets/images/guesofhonour.png" alt="" /></div>
    <div class="">
      <div
        class="text-[40px] mt-8 md:mt-0 md:mx-32 mx-2 text-center md:text-start"
      >
        <span class="text-orange-600 font-bold"
          >Why you should <br />
          Attend PBP
        </span>
        2024
      </div>
      <div
        class="md:w-[10%] w-[80%] mx-auto border-black md:mx-32 mt-8 border-b"
      />
      <div class="md:mx-32 mx-2 mt-8 text-[18px]">
        PBP 2024 is the must-attend event for Business and HR Leaders looking to
        drive human capital excellence. Here’s why you should join us:
      </div>
    </div>
  </div>

  <div class="md:flex gap-4 md:mx-32 mx-2 mt-[80px]">
    <div v-for="(item, index) in chokas_mokas" :key="index">
      <InfoCard :info="item" />
    </div>
  </div>
</template>
