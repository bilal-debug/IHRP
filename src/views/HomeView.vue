<script setup>
import Banner from "@/components/commonComponents/banner/Banner.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import Navbar from "@/components/commonComponents/navbar/Navbar.vue";
import GuestOfHonour from "@/components/viewComponents/home/GuestOfHonour.vue";
import PeopleBehindPeople from "@/components/viewComponents/home/PeopleBehindPeople.vue";
import SecureYourSpot from "@/components/viewComponents/home/SecureYourSpot.vue";
</script>

<template>
  <!-- <Banner/> -->
  <PeopleBehindPeople />
  <GuestOfHonour />
  <SecureYourSpot />
  <Footer />
</template>
