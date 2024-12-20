<script setup>
import SubmitButton from "../buttons/SubmitButton.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

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
const errorMessage = ref(null);
const userSelectedOptions = ref(null);
const router = useRouter();

const handeSubmit = () => {
  if (userSelectedOptions.value === null) {
    errorMessage.value = "Please select one option";
  } else {
    errorMessage.value = null;

    if (
      userSelectedOptions.value.title === "Certified Community - Individual"
    ) {
      router.push("/ihrp-certified-cummunity/registration/individual");
    } else if (
      userSelectedOptions.value.title === "Certified Community - 5 Passes"
    ) {
      router.push("/ihrp-certified-cummunity/registration/individual");
    }
  }
};
</script>
<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <div v-for="(rginfo, index) in rinfo" :key="index" class="mx-24">
      <div
        class="flex justify-start gap-4 bg-orange-50 border border-orange-300 rounded-lg md:px-12 py-8 mt-6"
      >
        <div class="">
          <input
            class="w-5 h-5 accent-[#ffa500] appearance-none border-2 border-gray-300 rounded-full checked:border-[#ffa500] checked:bg-[#ffa500]"
            type="radio"
            :value="rginfo"
            name="userSelectedOptions"
            v-model="userSelectedOptions"
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

      <p class="mt-4">{{ errorMessage }}</p>
    </div>
  </div>

  <SubmitButton :handeSubmit="handeSubmit" />
</template>
