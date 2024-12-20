<script setup>
import { ref, watch } from "vue";
import SubmitButton from "../buttons/SubmitButton.vue";

const companyName = ref("");
const errorMessage = ref(null);
const nameerrorMessage = ref("");
const name = ref("");
const designation = ref("");
const designationerrorMessage = ref("");
const email = ref("");
const emailerrorMessage = ref("");
const mobileNumber = ref("");
const mnerrorMessage = ref("");
const companyUEN = ref("");
const uenerrorMessage = ref("");
const sessions = ref(false);
const sessionserrorMessage = ref("");
const status = ref(false);
const statuserrorMessage = ref("");
const promo = ref("");

const register = () => {
  if (companyName.value === "") {
    errorMessage.value = "This field is required";
  } else {
    errorMessage.value = null;
  }

  if (companyUEN.value === "") {
    uenerrorMessage.value = "This field is required";
  } else {
    uenerrorMessage.value = null;
  }
  if (status.value === false) {
    statuserrorMessage.value = "This field is required";
  } else {
    statuserrorMessage.value = null;
  }
  if (sessions.value === false) {
    sessionserrorMessage.value = "This field is required";
  } else {
    sessionserrorMessage.value = null;
  }

  if (name.value === "") {
    nameerrorMessage.value = "This field is required";
  } else {
    nameerrorMessage.value = null;
  }
  if (designation.value === "") {
    designationerrorMessage.value = "This field is required";
  } else {
    designationerrorMessage.value = null;
  }

  if (email.value === "") {
    emailerrorMessage.value = "Invalid Email Address";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value)) {
      emailerrorMessage.value = "Invalid email format";
    } else {
      emailerrorMessage.value = null;
    }
  }
  if (mobileNumber.value === "") {
    mobileNumberErrorMessage.value = "This field is required";
  } else if (mobileNumber.value.length !== 11) {
    mnerrorMessage.value = "Mobile number must be exactly 11 characters";
  } else {
    mnerrorMessage.value = null;
  }

  data();
};

const data = () => {
  if (
    name.value !== "" &&
    companyName.value !== "" &&
    companyUEN.value !== "" &&
    designation.value !== "" &&
    status.value !== "" &&
    email.value !== "" &&
    mobileNumber.value !== "" &&
    sessions.value !== "" &&
    promo.value !== ""
  ) {
    console.log(name.value);
    console.log(companyName.value);
    console.log(companyUEN.value);
    console.log(designation.value);
    console.log(status.value);
    console.log(email.value);
    console.log(mobileNumber.value);
    console.log(sessions.value);
    console.log(promo.value);
  }
};

watch(companyName, () => {
  console.log(companyName.value);
});
</script>
<template>
  <form action="">
    <div class="md:mx-24 mx-6 md:mt-6 mt-5">
      <div class="space-y-4">
        <div>
          <div class="flex items-center">
            <label class="text-gray-700 font-semibold w-40" for=""
              >Company Name</label
            >
            <input
              class="border w-[50%] px-2 py-1 rounded"
              type="text"
              name="companyName"
              v-model="companyName"
            />
          </div>
          <p class="mx-44 mt-1 text-red-600">{{ errorMessage }}</p>
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Company UEN</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="companyUEN"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ uenerrorMessage }}</p>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for="">Name</label>
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="name"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ nameerrorMessage }}</p>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Designation</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="designation"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ designationerrorMessage }}</p>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Residential Status</label
          >

          <select
            class="border w-[50%] px-2 py-1 rounded b"
            name="status"
            id="status"
            v-model="status"
          >
            <option class="" value="Singaporean">Singaporean</option>
            <option value="Permanent Resident">Permanent Resident</option>
            <option value="Foreigner">Foreigner</option>
          </select>
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ statuserrorMessage }}</p>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for="">Email</label>
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="email"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ emailerrorMessage }}</p>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Mobile Number</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="mobileNumber"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ mnerrorMessage }}</p>

        <div class="mt-9">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Breakout Track Sessions
            <span class="text-gray-500 text-[12px] mx-2"
              >(Please Select 1 Only)</span
            ></label
          >

          <div class="mt-4 flex">
            <input
              class="border rounded"
              type="radio"
              name="topic"
              v-model="sessions"
            />
            <label class="px-3 font-semibold text-gray-700" for=""
              >Driving Business Excellence Through Strategic Human
              Capital</label
            >
          </div>

          <div class="flex">
            <input
              class="border rounded"
              type="radio"
              name="topic"
              v-model="sessions"
            />

            <label class="px-3 font-semibold text-gray-700" for=""
              >Forward Human Resource 2025</label
            >
          </div>

          <div class="flex">
            <input
              class="border rounded"
              type="radio"
              name="topic"
              v-model="sessions"
            />
            <div class="flex items-center">
              <label class="px-3 font-semibold text-gray-700" for=""
                >Balancing The Reins: Mastering Flexible Work Arrangement
                Requests</label
              >
            </div>
          </div>
          <p class="mt-1 text-red-600">{{ sessionserrorMessage }}</p>
        </div>
        <div class="flex">
          <div class="text-gray-600 font-semibold">
            Promo Code<span class="text-gray-500 text-[12px] mx-2"
              >(if any)</span
            >
          </div>
          <div>
            <input class="border rounded mx-5" type="text" v-model="promo" />
          </div>
        </div>

        <div class="md:mx-6">
          <ul class="list-disc text-[14px]">
            <li class="text-gray-600 pb-3">
              By registering, you acknowledge and agree that you grant IHRP and
              its partners/sponsors the right to store and use your provided
              information for marketing communications and other purposes deemed
              necessary by IHRP in future. This consent has no restrictions and
              is not limited by any specific time frame or geographical
              restrictions. You can update your preferences at any time. For
              more information on how we handle your personal data, please refer
              to the IHRP Privacy Policy, available at www.ihrp.sg/terms-of-use
            </li>
            <li class="text-gray-600">
              By attending, you acknowledge that photography and filming may
              take place at the event. IHRP reserves the right to use images and
              videos recorded at the event with you and/or your likeness in
              future marketing materials, including social media channels,
              websites, mobile applications and print material worldwide,
              without obtaining any further approval from you or making any
              payment to you. This consent has no restrictions and is not
              limited by geographical boundaries or any specific time frame. If
              you do not wish your photograph or video captured at the event,
              please notify IHRP and we will use reasonable endeavours to comply
              with your request. IHRP shall not be responsible for photographs
              or videos taken and/or shared by other event participants
            </li>
          </ul>
        </div>
      </div>
    </div>
  </form>
  <SubmitButton :handeSubmit="register" />
</template>
