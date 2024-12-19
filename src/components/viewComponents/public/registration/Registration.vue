<script setup>
import PublicRegistrationCard from "@/components/commonComponents/cards/PublicRegistrationCard.vue";

import Footer from "@/components/commonComponents/footer/Footer.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
</script>
<template>
  <RNavBar />
  <div class="mx-24 font-semibold text-blue-900 text-[26px] mt-10">
    <p class="text-gray-600 pb-7">
      Partners /
      <span class="text-blue-800 font-bold">Registration</span>
    </p>
    <p>Please select one</p>
  </div>

  <PublicRegistrationCard />

  <div
    class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
    style="background-size: 100% 100%"
  >
    <Footer />
  </div>
</template>
