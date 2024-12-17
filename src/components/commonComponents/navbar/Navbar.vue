<script setup>
function onToggleMenu() {
    const name = document.getElementById('ion-icon').getAttribute('name')
    if(name  === 'menu'){
        document.getElementById('ion-icon').setAttribute('name', 'close')
    }else{
        document.getElementById('ion-icon').setAttribute('name', 'menu')
    }

    const nav = document.getElementById('nav-links')

nav.classList.toggle('!top-[9%]')


}
</script>
<template>
    <nav class="">
       
        <div id="nav-links" class="md:static absolute -top-[100%] transition-all duration-30  text-white w-full bg-blue-950 md:bg-transparent h-[400px]md:h-auto  flex justify-center">
        <ul class=" flex md:flex-row flex-col text-[20px] md:justify-center  md:gap-10 md:text-white font-bold md:p-[70px]  pt-9 gap-4">
            <li><a href="">Home</a></li>
            <li><a href="">Programme Overview</a></li>
            <li><a href="">SME Sucess Track</a></li>
            <li><a href="">Speakers</a></li>
            <li><a href="">Partners</a></li>
            <li><a href="">Getting TO MBS</a></li>
        </ul>
         
    </div>
    <div class="flex items-center md:hidden justify-end text-white  ">
                
                <ion-icon @click="onToggleMenu()"
                id="ion-icon"
                name="menu"></ion-icon>
            </div>
   
 
    </nav>
    
</template>