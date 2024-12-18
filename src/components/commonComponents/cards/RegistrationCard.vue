<script setup>
import SubmitButton from "../buttons/SubmitButton.vue";

const rinfo = [
  {
    title: "Certified Community - Individual",
    price: "$566.80",
    ticket: "Per Ticket",
  },
  {
    title: "Certified Community - 5 Passes",
    price: "$2,757.70",
    ticket: "Per Group",
  },
  {
    title: "Certified Community - 1+1 Deal : Bring An Uncertified Friend",
    price: "$1,046.40",
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
      class="flex justify-center gap-4 bg-orange-50 border border-orange-300 rounded-lg px-12 py-8 mt-6 mx-24"
      v-for="(rginfo, index) in rinfo"
      :key="index"
    >
      <div class="">
        <input
          class="w-5 h-5 accent-[#ffa500] appearance-none border-2 border-gray-300 rounded-full checked:border-[#ffa500] checked:bg-[#ffa500]"
          type="radio"
          name="Registration Card Radio"
        />
      </div>
      <div class="mt-[-6px]">
        <div>
          <h2 class="text-[24px] text-orange-400">
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
  <SubmitButton />
</template>
