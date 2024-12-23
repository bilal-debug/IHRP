<script setup>
import { ref, watch } from "vue";
import SubmitButton from "../buttons/SubmitButton.vue";
const props = defineProps(["isForModal"]);

const userInput = ref({
  companyName: "",
  name: "",
  designation: "",
  email: "",
  mobileNumber: "",
  companyUEN: "",
  sessions: null,
  status: false,
  promo: "",
});

const ErrorMessage = ref({
  errorMessage: null,
  nameerrorMessage: "",
  designationerrorMessage: "",
  emailerrorMessage: "",
  mnerrorMessage: "",
  uenerrorMessage: "",
  sessionserrorMessage: "",
  statuserrorMessage: "",
});

const register = () => {
  if (userInput.value.companyName === "") {
    ErrorMessage.value.errorMessage = "This field is required";
  } else {
    ErrorMessage.value.errorMessage = null;
  }

  if (userInput.value.name === "") {
    ErrorMessage.value.nameerrorMessage = "This field is required";
  } else {
    ErrorMessage.value.nameerrorMessage = null;
  }
  if (userInput.value.designation === "") {
    ErrorMessage.value.designationerrorMessage = "This field is required";
  } else {
    ErrorMessage.value.designationerrorMessage = null;
  }
  if (userInput.value.status === false) {
    ErrorMessage.value.statuserrorMessage = "This field is required";
  } else {
    ErrorMessage.value.statuserrorMessage = null;
  }

  if (userInput.value.sessions === null) {
    ErrorMessage.value.sessionserrorMessage = "please select atleast 1";
  } else {
    ErrorMessage.value.sessionserrorMessage = null;
  }
  if (userInput.value.companyUEN === "") {
    ErrorMessage.value.uenerrorMessage = "This field is required";
  } else {
    ErrorMessage.value.uenerrorMessage = null;
  }

  if (userInput.value.email === "") {
    ErrorMessage.value.emailerrorMessage = "Please Enter Email Address";
  } else {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(userInput.value.email)) {
      ErrorMessage.value.emailerrorMessage = "Invalid email format";
    } else {
      ErrorMessage.value.emailerrorMessage = null;
    }
  }
  if (userInput.value.mobileNumber === "") {
    ErrorMessage.value.mnerrorMessage = "This field is required";
  } else if (userInput.value.mobileNumber.length !== 11) {
    ErrorMessage.value.mnerrorMessage =
      "Mobile number must be exactly 11 characters";
  } else {
    ErrorMessage.value.mnerrorMessage = null;
  }

  data();
};

const data = () => {
  if (
    userInput.value.companyName === "" ||
    userInput.value.companyUEN === "" ||
    userInput.value.name === "" ||
    userInput.value.email === "" ||
    userInput.value.status == false ||
    userInput.value.sessions == null ||
    userInput.value.designation === "" ||
    userInput.value.mobileNumber === "" ||
    userInput.value.promo === ""
  ) {
    console.log("");
  } else {
    console.log(userInput.value);
  }
};

// watch(companyName, () => {
//   console.log(companyName.value);
// });
</script>
<template>
  <form action="">
    <div class="">
      <div class="space-y-4">
        <div>
          <div class="flex items-center gap-3">
            <label class="text-gray-700 font-semibold w-40" for=""
              >Company Name</label
            >
            <input
              class="border w-[50%] px-2 py-1 rounded"
              type="text"
              name="companyName"
              v-model="userInput.companyName"
            />
          </div>
          <p class="mx-44 mt-1 text-red-600">{{ ErrorMessage.errorMessage }}</p>
        </div>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Company UEN</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="userInput.companyUEN"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">
          {{ ErrorMessage.uenerrorMessage }}
        </p>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for="">Name</label>
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="userInput.name"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">
          {{ ErrorMessage.nameerrorMessage }}
        </p>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Designation</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="userInput.designation"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">
          {{ ErrorMessage.designationerrorMessage }}
        </p>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Residential Status</label
          >

          <select
            class="border w-[50%] px-2 py-1 rounded b"
            name="status"
            id="status"
            v-model="userInput.status"
          >
            <option class="" value="Singaporean">Singaporean</option>
            <option value="Permanent Resident">Permanent Resident</option>
            <option value="Foreigner">Foreigner</option>
          </select>
        </div>
        <p class="mx-44 mt-1 text-red-600">
          {{ ErrorMessage.statuserrorMessage }}
        </p>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for="">Email</label>
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="userInput.email"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">
          {{ ErrorMessage.emailerrorMessage }}
        </p>

        <div class="flex items-center gap-3">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Mobile Number</label
          >
          <input
            class="border w-[50%] px-2 py-1 rounded"
            type="text"
            name=""
            v-model="userInput.mobileNumber"
          />
        </div>
        <p class="mx-44 mt-1 text-red-600">{{ ErrorMessage.mnerrorMessage }}</p>

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
              value="Driving Business Excellence Through Strategic Human
              Capital"
              v-model="userInput.sessions"
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
              value="Forward Human Resource 2025"
              v-model="userInput.sessions"
            />

            <label class="px-3 font-semibold text-gray-700" for=""
              >Forward Human Resource 2025</label
            >
          </div>

          <div class="flex">
            <input
              class="border rounded"
              type="radio"
              value="Balancing The Reins: Mastering Flexible Work Arrangement
                Requests"
              v-model="userInput.sessions"
            />
            <div class="flex items-center">
              <label class="px-3 font-semibold text-gray-700" for=""
                >Balancing The Reins: Mastering Flexible Work Arrangement
                Requests</label
              >
            </div>
          </div>
          <p class="mt-1 text-red-600">
            {{ ErrorMessage.sessionserrorMessage }}
          </p>
        </div>
        <div v-if="!isForModal">
          <div class="flex">
            <div class="text-gray-600 font-semibold">
              Promo Code<span class="text-gray-500 text-[12px] mx-2"
                >(if any)</span
              >
            </div>
            <div>
              <input
                class="border rounded mx-5"
                type="text"
                v-model="userInput.promo"
              />
            </div>
          </div>

          <div class="md:mx-6">
            <ul class="list-disc text-[14px]">
              <li class="text-gray-600 pb-3">
                By registering, you acknowledge and agree that you grant IHRP
                and its partners/sponsors the right to store and use your
                provided information for marketing communications and other
                purposes deemed necessary by IHRP in future. This consent has no
                restrictions and is not limited by any specific time frame or
                geographical restrictions. You can update your preferences at
                any time. For more information on how we handle your personal
                data, please refer to the IHRP Privacy Policy, available at
                www.ihrp.sg/terms-of-use
              </li>
              <li class="text-gray-600">
                By attending, you acknowledge that photography and filming may
                take place at the event. IHRP reserves the right to use images
                and videos recorded at the event with you and/or your likeness
                in future marketing materials, including social media channels,
                websites, mobile applications and print material worldwide,
                without obtaining any further approval from you or making any
                payment to you. This consent has no restrictions and is not
                limited by geographical boundaries or any specific time frame.
                If you do not wish your photograph or video captured at the
                event, please notify IHRP and we will use reasonable endeavours
                to comply with your request. IHRP shall not be responsible for
                photographs or videos taken and/or shared by other event
                participants
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </form>
  <SubmitButton :handeSubmit="register" text="Submit" />
</template>
