<script setup>
import SpotButton from "@/components/commonComponents/buttons/SpotButton.vue";
</script>
<template>
  <div class="bg-gray-200 mt-[90px]">
    <div class="md:flex justify-center">
      <div
        class="bg-white py-3 px-14 rounded-[80px] shadow-gray-500 border my-[-30px]"
        style="box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px"
      >
        <h2 class="md:text-[34px] font-bold">SECURE YOUR SPOT TODAY!</h2>
      </div>
    </div>
    <div class="mt-[60px]">
      <SpotButton />
    </div>
    <div class="mt-[30px]">
      <p class="text-center text-[18px] font-semibold">
        Be part of the largest PBP event ever and empower your people to drive
        your business forward.
      </p>
    </div>
  </div>
</template>
