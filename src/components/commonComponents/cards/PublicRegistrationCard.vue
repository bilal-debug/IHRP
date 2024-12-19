<script setup>
import SubmitButton from "../buttons/SubmitButton.vue";

const rinfo = [
  {
    title: "Public - Individual",
    price: "$675.80",
    ticket: "Per Ticket",
  },
  {
    title: "Public - 5 Passes",
    price: "$3277.63",
    ticket: "Per Group",
  },
  {
    title: "Public - 10 Passes (Per Table)",
    price: "$6,420.10",
    ticket: "Per Group",
  },
  {
    title: "Certified Community - 10 Passes (Per Table)",
    price: "$5,384.60",
    ticket: "Per Group",
  },
];
</script>
<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <div
      class="flex gap-4 bg-gray-50 border border-green-300 rounded-lg md:px-12 py-8 mt-6 mx-24"
      v-for="(rginfo, index) in rinfo"
      :key="index"
    >
      <div class="">
        <input
          class="w-5 h-5 accent-[#3cb371] appearance-none border-2 border-gray-300 rounded-full checked:border-[#3cb371] checked:bg-[#3cb371]"
          type="radio"
          name="Registration Card Radio"
        />
      </div>
      <div class="mt-[-6px]">
        <div>
          <h2 class="text-[24px] text-green-400">
            {{ rginfo.title }}
          </h2>
        </div>
        <div class="flex items-center gap-1">
          <div>
            <h3 class="text-[28px]">{{ rginfo.price }}</h3>
          </div>
          <div>
            <p>({{ rginfo.ticket }})</p>
          </div>
        </div>
        <div><p class="text-gray-400">(After GST of 9%)</p></div>
      </div>
    </div>
  </div>
  <RouterLink to="/public/registration/individual">
    <SubmitButton />
  </RouterLink>
</template>
