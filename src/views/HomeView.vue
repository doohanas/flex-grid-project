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
            <!-- 
              /**
              * If, we have a lot of data, User able to dcroll while dragging. use scroll-sensitivity: number and force-fallback: boolean
              */              
            -->
     
          <draggable class="max-h-[700px]" v-model="lists" tag="tbody" group="people" :scroll-sensitivity="250"  :force-fallback="true" animation="150" :sort="true" ghost-class="ghost" :disabled="isShowTrue"  handle=".iconHandle">
            <tr class="h-[300px] border border-red-500" v-for="(item,index) in lists" :key="item.id">
                <td>{{ item.id }}</td>
                <td>
                  <transition name="fade">
                    <img v-if="!isShowTrue" class="inline iconHandle cursor-move" src="@/assets/drag.png" width="30" height="30" alt="">
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

      <div class="my-10" v-for="item in finalLists" :key="item.id">
        {{ item }}
      </div>
     
    </section>
  </div>
</template>

<script>
import draggable from 'vuedraggable';

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
              { id: 1, judul: 'Banner Jabar', preview: 'jabar logo', order: 1, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 2, judul: 'Banner Jatim', preview: 'jatim logo', order: 2, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 3, judul: 'Banner Jogja', preview: 'jogja logo', order: 3, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 4, judul: 'Banner jakarta', preview: 'jakarta logo', order: 4, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 5, judul: 'Banner jakarta', preview: 'jakarta logo', order: 5, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 6, judul: 'Banner jakarta', preview: 'jakarta logo', order: 6, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 7, judul: 'Banner jakarta', preview: 'jakarta logo', order: 7, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 8, judul: 'Banner jakarta', preview: 'jakarta logo', order: 8, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 9, judul: 'Banner jakarta', preview: 'jakarta logo', order: 9, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 10, judul: 'Banner jakarta', preview: 'jakarta logo', order: 10, link: 'https://google.com', status: true, aksi: 'Aksi'}
            ],
            dragging: false,
            isShowTrue: false
          };
    },
    computed: {
      finalLists () {
        return this.lists.map((item,index) => ({
            id: item.id,
            order: index + 1
          }))
      }
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

.ghost {
  opacity: .5;
  background-color: #C8EBFB;
}
</style>
