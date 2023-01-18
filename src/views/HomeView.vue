<template>
  <div class="home">
    Hello Vue Draggable
    
    <!-- Lust Item Draggable -->

    <draggable v-model="items" >
      <div v-for="element in items" :key="element.id">{{element.title}}</div>
    </draggable>

    <button class="bg-green-400 outline-none rounded-md p-4 shadow-md" @click="isShowTrue = !isShowTrue">Edit Urutan</button>

    <!-- Table Draggable -->
    <section class="min-w-[500px] min-h-[500px]">

      <table class="mx-auto">
          <thead>    
              <th class="pr-4" v-for="header in headers" :key="header" scope="col">
                {{ header }}
              </th>
          </thead>
     
          <draggable v-model="lists" tag="tbody" animation="150" :sort="true" ghost-class="ghost" :disabled="isShowTrue"  handle=".iconHandle">
            <tr v-for="(item,index) in lists" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <transition name="fade">
                    <img v-if="!isShowTrue" class="inline iconHandle" src="@/assets/drag.png" width="30" height="30" alt="">
                  </transition>
                  {{ item.judul }}
                </td>
                <td>{{ item.preview }}</td>     
                <td>{{ index + 1 }}</td>     
                <td>{{ item.link }}</td>     
                <td>{{ item.status }}</td>     
                <td>{{ item.aksi }}</td>     
            </tr>
          </draggable>
      </table>

      <div class="my-10" v-for="item in lists" :key="item.id">
        {{ item }}
      </div>
     
    </section>
  </div>
</template>

<script>
import draggable from '@/plugins/draggable';

export default {
    name: "HomeView",
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: "Item 1",
                },
                {
                    id: 2,
                    title: "Item 2",
                },
                {
                    id: 3,
                    title: "Item 3",
                },
            ],
            headers: ["id", "judul", "preview", "urutan", "link", "status", "aksi"],
            lists: [
              { id: 1, judul: 'Banner Jabar', preview: 'jabar logo', urutan: 1, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 2, judul: 'Banner Jatim', preview: 'jatim logo', urutan: 2, link: 'https://google.com', status: false, aksi: 'Aksi'},
              { id: 3, judul: 'Banner Jogja', preview: 'jogja logo', urutan: 3, link: 'https://google.com', status: false, aksi: 'Aksi'},
              { id: 4, judul: 'Banner jakarta', preview: 'jakarta logo', urutan: 4, link: 'https://google.com', status: false, aksi: 'Aksi'}
            ],
            dragging: false,
            isShowTrue: false
          };
    },
    components: { draggable }
};
</script>

<style>
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
