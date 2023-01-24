<template>
 <section class="w-[1280px] h-[1000px] mx-auto bg-gray-100 rounded-md items-center overflow-hidden">
  <h1>Iphone Design using html and css</h1>
  <button class="rounded-md bg-green-500 py-4 px-6 w-fit" @click="isShowIphone = !isShowIphone">Show Iphone</button>
  <!-- add annimation in class binding below -->
  <transition name="iphone">
  <div
    v-show="isShowIphone" 
    class="iphone-frame relative m-auto border-solid border-black border-[10px] rounded-[30px] w-[195px] h-[414px] shadow-xl shadow-gray-800"
    > 
    <div class="iphone-screen absolute z-10 w-full h-full rounded-[20px] bg-[url('/src/assets/beach.jpg')] bg-no-repeat bg-cover bg-left-bottom">
      <div class="iphone-notch z-25 absolute top-0 left-[36px] w-[100px] h-[20px] bg-black rounded-[0px_0px_10px_10px]">
      </div>
      <div class="iphone-content mt-6 top-[36px] w-full h-fit ">
        <div class="iphone-apps flex flex-row p-2">
          <button @click="isShowContent = !isShowContent">
            <img src="@/assets/chrome.svg" width="36" height="36" alt="">
          </button>
        </div>
      </div>
      <div :class="{
        'iphone-modal w-full h-full absolute inset-0 bg-black bg-opacity-40 backdrop-filter backdrop-blur-sm overflow-hidden': isShowContent
        
        }"
        >
        <transition name="content">
          <div v-show="isShowContent" class="absolute w-full h-[calc(100%-20px)] top-4">
            <!-- 
              /**
              * iphone_content will save the dynamic content from fetch api 
              */
             -->
            <div class="flex py-1 px-2 w-full justify-end">
              <button  @click="isShowContent = !isShowContent" class="h-8 w-8 text-[14px] bg-green-600 rounded-full hover:bg-green-700 transition-colors ease-brand duration-250 text-white">
                X
              </button>
            </div>
            <div class="bg-gray-50 p-1 rounded-[10px_10px_0px_0px]">
              <div class="flex justify-center overflow-y-auto min-w-full max-h-full">
                <img class="w-auto h-auto object-contain" src="@/assets/pisodapur-mobile.jpg" alt="" width="255" height="443" />
              </div>
              <div class="w-full bg-gray-50 flex items-center justify-center pt-2">
                <a class="rounded-md bg-green-700 p-2 w-full text-sm text-white" href="https://pisodapur.jabarprov.go.id/">Kunjungi Link</a>
              </div>
            </div>
          </div>
        </transition>
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
      isShowIphone: false,
      isShowContent: false
    }
  },
};
</script>

<style>
.iphone-enter-active, .content-enter-active {
  transition: all .8s cubic-bezier(0.175, 0.885, 0.32, 1.3);
}
.iphone-leave-active, .content-leave-active {
  transition: all .8s ease-out;
}
.iphone-enter, .iphone-leave-to {
  transform: translateY(1200px);
}

.content-enter, .content-leave-to {
  transform: translateY(500px);
}
</style>
