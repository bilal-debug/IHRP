<script setup>
import Banner from "@/components/commonComponents/banner/Banner.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import GuestOfHonour from "@/components/viewComponents/home/GuestOfHonour.vue";
import PeopleBehindPeople from "@/components/viewComponents/home/PeopleBehindPeople.vue";
import SecureYourSpot from "@/components/viewComponents/home/SecureYourSpot.vue";
</script>

<template>
  <Banner />
  <PeopleBehindPeople />
  <GuestOfHonour />
  <div
    class="bg-[url('./src/assets/images/footer.png')] bg-no-repeat"
    style="background-size: 100% 100%"
  >
    <SecureYourSpot />
    <Footer />
  </div>
</template>
