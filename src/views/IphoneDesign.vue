<template>
 <section class="min-h-screen">
  <h1>Iphone Design using html and css</h1>
  <div class="iphone-frame relative m-auto border-solid border-black border-[10px] rounded-[40px] w-[414px] h-[896px] shadow-xl shadow-gray-800"> 
    <div class="iphone-screen absolute z-10 w-full h-full rounded-[30px] bg-[url('/src/assets/beach.jpg')] bg-no-repeat bg-cover bg-left-bottom">
      <div class="iphone-notch z-25 absolute top-0 left-[62px] w-[300px] h-[30px] bg-black rounded-[0px_0px_20px_20px]">
      </div>
      <div class="iphone-content absolute z-10 top-[36px] w-full h-[calc(100%-40px)] bg-white rounded-[20px]">
        <!-- 
          /**
          * iphone_content will save the dynamic content from fetch api 
          */
         -->
        <img src="" alt="">
        <p>It will image</p>
        <button class="bg-green-700 bottom-0 absolute">Test</button>
      </div>
    </div>
  </div>
 </section>
</template>

<script>
export default {
  name: "IphoneDesign",
  data() {
    return {
    }
  },
};
</script>

<style>

</style>
