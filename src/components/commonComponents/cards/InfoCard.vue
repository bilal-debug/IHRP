<script setup>
const props = defineProps(["info"]);
</script>
<template>
  <div
    class="border border-orange-200 rounded-bl-[20px] p-2 rounded-tr-[20px] mt-8 md:mt-0 h-full"
  >
    <div class="bg-orange-100 p-9 rounded-bl-[20px] rounded-tr-[20px] h-full">
      <div></div>
      <div class="font-bold text-orange-400">
        {{ info.label }}
      </div>
      <div class="border-b border-gray-400 mt-2" />
      <div class="mt-2">
        {{ info.description }}
      </div>
    </div>
  </div>

  <!-- <div
      class="border border-orange-200 rounded-bl-[20px] p-2 rounded-tr-[20px] mt-8 md:mt-0"
    >
      <div class="bg-orange-100 p-9 rounded-bl-[20px] rounded-tr-[20px] h-full">
        <div></div>
        <div class="font-bold text-orange-400"></div>
        <div class="border-b w-[40%] border-gray-400 mt-2" />
        <div class="mt-2">
      
        </div>
      </div>
    </div> -->

  <!-- <div
      class="border border-orange-200 rounded-bl-[20px] p-2 rounded-tr-[20px] mt-8 md:mt-0"
    >
      <div class="bg-orange-100 p-9 rounded-bl-[20px] rounded-tr-[20px] h-full">
        <div></div>
        <div class="font-bold text-orange-400">
          
        </div>
        <div class="border-b w-[40%] border-gray-400 mt-2" />
        <div class="mt-2">
          
        </div>
      </div>
    </div> -->

  <!-- <div
      class="border border-orange-200 rounded-bl-[20px] p-2 rounded-tr-[20px] mt-8 md:mt-0"
    >
      <div class="bg-orange-100 p-9 rounded-bl-[20px] rounded-tr-[20px] h-full">
        <div></div>
        <div class="font-bold text-orange-400">Transformative Content</div>
        <div class="border-b w-[40%] border-gray-400 mt-2" />
        <div class="mt-2">
          Engage in panel discussions and interactive sessions designed to equip
          you with the tools and knowledge to boost productivity and drive
          growth with your organisation.
        </div>
      </div>
    </div> -->
</template>
