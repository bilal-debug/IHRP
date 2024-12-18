<script setup>
function onToggleMenu() {
  const name = document.getElementById("ion-icon").getAttribute("name");
  if (name === "menu") {
    document.getElementById("ion-icon").setAttribute("name", "close");
  } else {
    document.getElementById("ion-icon").setAttribute("name", "menu");
  }

  const nav = document.getElementById("nav-links");

  nav.classList.toggle("!top-[9%]");
}
</script>
<template>
  <nav class="">
    <div
      id="nav-links"
      class="md:static absolute -top-[100%] transition-all md:px-5 pb-4 max-h-[100px] duration-30 text-white w-full md:bg-gradient-to-t from-transparent 90% to-blue-950 bg-contain md:h-auto md:flex justify-center bg-blue-950 bg-transparent"
    >
      <div class="w-full md:w-auto bg-blue-950 md:bg-transparent">
        <img
          class="flex justify-end w-26 h-20 p-2 bg-blue-950 md:bg-transparent"
          src="../../../assets/images/logo.png"
          alt=""
        />
      </div>
      <div>
        <ul
          class="flex md:flex-row flex-col p-2 text-[20px] md:justify-center md:gap-6 md:text-white font-bold md:p-[70px] pt-6 md:pt-8 gap-4 bg-blue-950 md:bg-transparent w-full"
        >
          <li><a href="">Home</a></li>
          <li><a href="">Programme Overview</a></li>
          <li><a href="">SME Sucess Track</a></li>
          <li><a href="">Speakers</a></li>
          <li><a href="">Partners</a></li>
          <li><a href="">Getting TO MBS</a></li>
        </ul>
      </div>
    </div>
    <div
      class="flex items-center md:hidden justify-end pr-4 pt-4 text-white bg-blue-950 p-9"
    >
      <ion-icon @click="onToggleMenu()" id="ion-icon" name="menu"></ion-icon>
    </div>
  </nav>
</template>
