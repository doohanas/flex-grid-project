<template>
 <section class="w-[1280px] h-[1000px] mx-auto bg-gray-100 rounded-md items-center overflow-hidden">
  <h1>Iphone Design using html and css</h1>
  <button class="rounded-md bg-green-500 py-4 px-6 w-fit" @click="isShowIphone = !isShowIphone">Show Iphone</button>
  <!-- add annimation in class binding below -->
  <transition name="iphone">
  <div
    v-show="isShowIphone" 
    class="iphone-frame relative m-auto border-solid border-black border-[10px] rounded-[40px] w-[414px] h-[896px] shadow-xl shadow-gray-800"
    > 
    <div class="iphone-screen absolute z-10 w-full h-full rounded-[30px] bg-[url('/src/assets/beach.jpg')] bg-no-repeat bg-cover bg-left-bottom">
      <div class="iphone-notch z-25 absolute top-0 left-[62px] w-[300px] h-[30px] bg-black rounded-[0px_0px_20px_20px]">
      </div>
      <div class="iphone-content absolute z-10 top-[36px] w-full h-[calc(100%-40px)] bg-white rounded-[20px]">
        <!-- 
          /**
          * iphone_content will save the dynamic content from fetch api 
          */
         -->
        <button class="absolute mr-4 mt-4 rounded-full bg-green-500 py-2 px-2 right-0">X</button>
        <img class="absolute" src="" alt="">
        <p class="absolute">It will image</p>
        <button class="bg-green-700 bottom-0 absolute">Test</button>
      </div>
    </div>
  </div>
  </transition>
 </section>
</template>

<script>
export default {
  name: "IphoneDesign",
  data() {
    return {
      isShowIphone: false
    }
  },
};
</script>

<style>
.iphone-enter-active {
  transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.3);
}
.iphone-leave-active {
  transition: all .8s ease-out;
}
.iphone-enter, .iphone-leave-to {
  transform: translateY(1200px);
}
</style>
