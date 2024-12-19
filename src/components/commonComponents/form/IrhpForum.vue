<script setup></script>
<template>
  <div>
    <p class="md:mx-24 mx-6 text-[24px] font-semibold text-gray-600 pb-5 mt-9">
      IHRP Certified Community / Registration /<span class="text-blue-800">
        Individual</span
      >
    </p>
  </div>
  <div>
    <p class="font-semibold text-blue-900 text-[20px] md:mx-24 mx-6">
      Please Fill in Information Details
    </p>
  </div>
  <form action="">
    <div class="md:mx-24 mx-6 md:mt-6 mt-5">
      <div class="space-y-4">
        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Company Name</label
          >
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Company UEN</label
          >
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for="">Name</label>
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Designation</label
          >
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Residential Status</label
          >

          <select
            class="border w-[50%] px-2 py-1 rounded b"
            name="status"
            id="status"
          >
            <option class="" value="Singaporean">Singaporean</option>
            <option value="Permanent Resident">Permanent Resident</option>
            <option value="Foreigner">Foreigner</option>
          </select>
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for="">Email</label>
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="flex items-center">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Mobile Number</label
          >
          <input class="border w-[50%] px-2 py-1 rounded" type="text" name="" />
        </div>

        <div class="mt-9">
          <label class="text-gray-700 font-semibold w-40" for=""
            >Breakout Track Sessions
            <span class="text-gray-500 text-[12px] mx-2"
              >(Please Select 1 Only)</span
            ></label
          >

          <div class="mt-4 flex">
            <input class="border rounded" type="radio" name="topic" />
            <label class="px-3 font-semibold text-gray-700" for=""
              >Driving Business Excellence Through Strategic Human
              Capital</label
            >
          </div>

          <div class="flex">
            <input class="border rounded" type="radio" name="topic" />

            <label class="px-3 font-semibold text-gray-700" for=""
              >Forward Human Resource 2025</label
            >
          </div>

          <div class="flex">
            <input class="border rounded" type="radio" name="topic" />
            <div class="flex items-center">
              <label class="px-3 font-semibold text-gray-700" for=""
                >Balancing The Reins: Mastering Flexible Work Arrangement
                Requests</label
              >
            </div>
          </div>
        </div>
        <div class="flex">
          <div class="text-gray-600 font-semibold">
            Promo Code<span class="text-gray-500 text-[12px] mx-2"
              >(if any)</span
            >
          </div>
          <div><input class="border rounded mx-5" type="text" /></div>
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
</template>
