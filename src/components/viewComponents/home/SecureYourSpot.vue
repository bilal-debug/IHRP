<script setup>
import SpotButton from "@/components/commonComponents/buttons/SpotButton.vue";

const buttons = [
  {
    name: "IHRP Certified Community",
    color: "bg-orange-500",
    link: "/ihrp-certified-cummunity/registration",
  },
  {
    name: "Partners",
    color: "bg-blue-500",
    link: "/partners/registration/",
  },
  {
    name: "Public",
    color: "bg-green-500",
    link: "/public/registration/",
  },
];
</script>
<template>
  <div class="mt-[90px] relative">
    <div
      class="bg-white py-3 px-14 rounded-[80px] shadow-gray-500 border absolute -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-max"
      style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
    >
      <h2 class="md:text-[34px] font-bold">SECURE YOUR SPOT TODAY!</h2>
    </div>
    <div
      class="grid gap-3 md:mx-32 mx-2 grid-cols-1 md:grid-cols-3 pt-20 place-items-center"
    >
      <div class="w-full" v-for="(button, index) in buttons" :key="index">
        <SpotButton :info="button" />
      </div>
    </div>
    <div class="mt-[30px]">
      <p class="text-center text-[18px] font-semibold">
        Be part of the largest PBP event ever and empower your people to drive
        your business forward.
      </p>
    </div>
  </div>
</template>
