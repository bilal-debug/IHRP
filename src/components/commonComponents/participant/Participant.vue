<script setup>
const props = defineProps(["number"]);
</script>
<template>
  <div
    class="grid grid-cols-2 items-center bg-gray-100 py-1 px-4 md:w-[100%] w-full border-b-2 border-b-blue-700 border-opacity-60"
  >
    <div class="text-gray-600 font-semibold text-[18px]">
      <span> Participant {{ number }} </span>
    </div>
    <div class="flex justify-end">
      <button
        class="btn group text-gray-400 hover:text-blue-700 text-[18px] font-semibold bg-transparent outline-none border-none shadow-none"
        onclick="my_modal_2.showModal()"
      >
        Add
      </button>
    </div>
  </div>
</template>
