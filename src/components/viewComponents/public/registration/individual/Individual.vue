<script setup>
import SubmitButton from "@/components/commonComponents/buttons/SubmitButton.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import PublicForum from "@/components/commonComponents/form/PublicForum.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
</script>
<template>
  <RNavBar />
  <PublicForum />
  <SubmitButton />
  <div
    class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
    style="background-size: 100% 100%"
  >
    <Footer />
  </div>
</template>
