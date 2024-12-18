<script setup>
import FacebookIcon from "../icons/FacebookIcon.vue";
import InstagramIcon from "../icons/InstagramIcon.vue";
import LinkedlnIcon from "../icons/LinkedlnIcon.vue";
import TwitterIcon from "../icons/TwitterIcon.vue";

const ficons = [
  { link: "https://instagram.com", icon: "instagram" },
  { link: "https://facebook.com", icon: "facebook" },
  { link: "https://twitter.com", icon: "twitter" },
  { link: "https://linkedin.com", icon: "linkedin" },
];
</script>
<template>
  <div
    class="md:grid grid-cols-3 md:pt-24 pt-10 text-center md:text-white text-black"
  >
    <div class="">
      <p class="md:text-end mt-5 md:mt-0">
        © 2024 Insitute for Human Resource Professionals Limited. View out Terms
        of Use and Privacy Policy
      </p>
    </div>
    <div class="md:text-end mt-5 md:mt-0">
      <p>Find out about IHRP Certification at www.ihrp.s</p>
    </div>
    <div>
      <div class="pt-9 pb-9 md:pt-0 md:pb-0">
        <div class="grid grid-cols-4 gap-2 justify-center mx-9">
          <a
            v-for="(ficon, index) in ficons"
            :key="index"
            :href="ficon.link"
            aria-label="`Find us on ${ficon.icon  }`"
            target="_blank"
            rel="noopener"
          >
            <InstagramIcon v-if="ficon.icon === 'instagram'" />
            <TwitterIcon v-if="ficon.icon === 'twitter'" />
            <FacebookIcon v-if="ficon.icon === 'facebook'" />
            <LinkedlnIcon v-if="ficon.icon === 'linkedin'" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
