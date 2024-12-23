<script setup>
import SubmitButton from "@/components/commonComponents/buttons/SubmitButton.vue";
import Footer from "@/components/commonComponents/footer/Footer.vue";
import IrhpForum from "@/components/commonComponents/form/IrhpForum.vue";
import RNavBar from "@/components/commonComponents/navbar/RNavBar.vue";
import Participant from "@/components/commonComponents/participant/Participant.vue";
</script>
<template>
  <RNavBar />
  <div class="md:mx-44 mx-6">
    <div>
      <p class="text-[24px] font-semibold text-gray-600 pb-5 mt-9">
        IHRP Certified Community / Registration /<span class="text-blue-800">
          5 Passes</span
        >
      </p>
    </div>
    <div>
      <p class="font-semibold text-blue-900 text-[20px] mb-2">
        All Participants Details
      </p>
    </div>
    <div class="w-[50%]">
      <Participant number="1" />
      <Participant number="2" />
      <Participant number="3" />
      <Participant number="4" />
      <Participant number="5" />
    </div>
    <dialog id="my_modal_2" class="modal text-[20px]">
      <div class="modal-box max-w-4xl border border-gray-900">
        <span class="font-semibold text-[20px] text-blue-900 py-10 md:px-24"
          >Participant 2</span
        >
        <div class="grid py-10 md:px-24">
          <IrhpForum :isForModal="true" />
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <span class="text-gray-600 font-semibold mx-4 text-[14px]"
      >Each participant details must be completed</span
    >
    <div class="flex gap-4 mt-9">
      <div class="">
        <label for="" class="font-semibold text-gray-500 text-[20px]"
          >Promo Code
          <span class="text-gray-500 font-thin text-[16px]"
            >(If any)</span
          ></label
        >
      </div>
      <div>
        <input class="border border-gray-400" type="text" />
      </div>
    </div>
    <div class="mt-4 mx-6">
      <ul class="list-disc text-[14px] text-gray-600">
        <li>
          By registering, you acknowledge and agree that you grant IHRP and its
          partners/sponsors the right to store and use your provided information
          for marketing communications and other purposes deemed necessary by
          IHRP in future. This consent has no restrictions and is not limited by
          any specific time frame or geographical restrictions. You can update
          your preferences at any time. For more information on how we handle
          your personal data, please refer to the IHRP Privacy Policy, available
          at www.ihrp.sg/terms-of-use
        </li>
        <li class="mt-4">
          By attending, you acknowledge that photography and filming may take
          place at the event. IHRP reserves the right to use images and videos
          recorded at the event with you and/or your likeness in future
          marketing materials, including social media channels, websites, mobile
          applications and print material worldwide, without obtaining any
          further approval from you or making any payment to you. This consent
          has no restrictions and is not limited by geographical boundaries or
          any specific time frame. If you do not wish your photograph or video
          captured at the event, please notify IHRP and we will use reasonable
          endeavours to comply with your request. IHRP shall not be responsible
          for photographs or videos taken and/or shared by other event
          participants
        </li>
      </ul>
    </div>
  </div>
  <SubmitButton text="Submit" />
  <div
    class="bg-no-repeat bg-gradient-to-b from-transparent to-blue-600"
    style="background-size: 100% 100%"
  >
    <Footer />
  </div>
</template>
