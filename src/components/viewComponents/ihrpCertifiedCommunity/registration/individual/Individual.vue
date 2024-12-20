<script setup>
import SubmitButton from "@/components/commonComponents/buttons/SubmitButton.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import IrhpForum from "@/components/commonComponents/form/IrhpForum.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
</script>
<template>
  <RNavBar />
  <div>
    <p class="md:mx-24 mx-6 text-[24px] font-semibold text-gray-600 pb-5 mt-9">
      IHRP Certified Community / Registration /<span class="text-blue-800">
        Individual</span
      >
    </p>
  </div>
  <div>
    <p class="font-semibold text-blue-900 text-[20px] md:mx-24 mx-6">
      Please Fill in Information Details
    </p>
  </div>
  <IrhpForum />

  <div
    class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
    style="background-size: 100% 100%"
  >
    <Footer />
  </div>
</template>
