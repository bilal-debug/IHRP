<script setup>
import { ref } from "vue";
import SubmitButton from "../buttons/SubmitButton.vue";
import { useRouter } from "vue-router";

const rinfo = [
  {
    title: "Partners - Individual",
    price: "$599.50 ",
    ticket: "Per Ticket",
  },
  {
    title: "Partners - 5 Passes",
    price: "$2907.58",
    ticket: "Per Group",
  },
  {
    title: "Partners - 10 Passes (Per Table)",
    price: "$5695.25",
    ticket: "Per Group",
  },
];

const userSelectedOptions1 = ref(null);
const errorMessage = ref(null);
const router = useRouter();

const HandeSubmit = () => {
  if (userSelectedOptions1.value === null) {
    errorMessage.value = "Please Select atleast One Option";
  } else {
    errorMessage.value = "";

    if (userSelectedOptions1.value === null) {
      errorMessage.value = "Please select one option";
    } else {
      errorMessage.value = null;

      if (userSelectedOptions1.value.title === "Partners - Individual") {
        router.push("/partners/registration/individual");
      } else if (userSelectedOptions1.value.title === "Partners - 5 Passes") {
        router.push("/ihrp-certified-cummunity/registration/individual");
      }
    }
  }
};
</script>
<template>
  <div class="grid md:grid-cols-2 grid-cols-1">
    <div v-for="(rginfo, index) in rinfo" :key="index">
      <div
        class="flex justify-start gap-4 bg-blue-50 border border-blue-300 rounded-lg md:px-12 py-8 mt-6 mx-24 drop-shadow-xl"
      >
        <div class="">
          <input
            class="w-5 h-5 border-2 border-gray-300 rounded-full"
            type="radio"
            :value="rginfo"
            name="Registration Card Radio"
            v-model="userSelectedOptions1"
          />
        </div>
        <div class="mt-[-6px]">
          <div>
            <h2 class="text-[24px] text-blue-600">
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
      <p class="mx-24 mt-4">{{ errorMessage }}</p>
    </div>
  </div>

  <SubmitButton :handeSubmit="HandeSubmit" text="submit" />
</template>
