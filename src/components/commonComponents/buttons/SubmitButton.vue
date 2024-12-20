<script setup>
import { ref } from "vue";

const props = defineProps(["handeSubmit"]);
</script>
<template>
  <div class="flex justify-center mt-16">
    <button
      @click="handeSubmit"
      class="bg-orange-500 px-10 flex py-2 rounded-3xl uppercase text-[22px] font-semibold border text-white border-white outline-2 outline-white"
      style="box-shadow: 5px 5px 5px lightgray"
    >
      Register
    </button>
  </div>
</template>
