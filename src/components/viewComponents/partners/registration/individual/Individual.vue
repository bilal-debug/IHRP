<script setup>
import SubmitButton from "@/components/commonComponents/buttons/SubmitButton.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import PartnersForum from "@/components/commonComponents/form/PartnersForum.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
</script>
<template>
  <RNavBar />
  <PartnersForum />
  <SubmitButton />
  <div
    class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
    style="background-size: 100% 100%"
  >
    <Footer />
  </div>
</template>
