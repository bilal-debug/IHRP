<script setup>
import { ref } from "vue";
import RegistrationCard from "@/components/commonComponents/cards/RegistrationCard.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
</script>
<template>
  <div class="flex flex-col h-screen">
    <RNavBar />
    <div class="flex-1 h-auto">
      <div class="mx-24 font-semibold text-blue-900 text-[22px] mt-10">
        <p class="text-gray-600 pb-7">
          IHRP Certified Community /
          <span class="text-blue-800 font-bold">Registration</span>
        </p>
        <p>Please select one</p>
      </div>

      <RegistrationCard />
    </div>
    <div
      class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
      style="background-size: 100% 100%"
    >
      <Footer />
    </div>
  </div>
</template>
