<script setup>
import { ref } from "vue";
const selected = ref(false);
const errorMessage = ref("");

function ontoggle() {
  if (!selected.value) {
    errorMessage.value = "notselected error occur";
  } else {
    errorMessage.value = "";
  }
}
</script>
<template>
  <div class="flex justify-center mt-16">
    <button
      @click="ontoggle()"
      class="bg-orange-500 px-10 flex py-2 rounded-3xl uppercase text-[22px] font-semibold border text-white border-white outline-2 outline-white"
      style="box-shadow: 5px 5px 5px lightgray"
    >
      Register
    </button>
  </div>
</template>
