<script setup>
const props = defineProps(["info"]);
</script>
<template>
  <RouterLink :to="info.link">
    <button
      :class="`${info.color} flex items-center justify-center w-full border px-8 rounded-lg py-6 `"
      style="box-shadow: 10px 10px 5px lightgray"
    >
      <p class="text-[20px] text-white flex-1">
        {{ info.name }}
      </p>
      <img class="" src="../../../assets/images/icon.png" alt="" />
    </button>
  </RouterLink>

  <!-- <div class="flex justify-center">
      <button
        class="bg-blue-500 flex items-center w-[90%] border px-8 rounded-lg py-3"
        style="box-shadow: 10px 10px 5px lightgray"
      >
        <p class="text-[20px] text-white flex-1">Partners</p>
        <img class="ml-2" src="../../../assets/images/icon.png" alt="" />
      </button>
    </div>
    <div class="flex justify-center">
      <button
        class="bg-green-500 flex items-center w-[90%] border px-8 rounded-lg py-3"
        style="box-shadow: 10px 10px 5px lightgray"
      >
        <p class="text-[20px] text-white flex-1">Public</p>
        <img class="ml-2" src="../../../assets/images/icon.png" alt="" />
      </button>
    </div> -->
</template>
