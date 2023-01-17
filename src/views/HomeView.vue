<template>
  <div class="home">
    Hello Vue Draggable
    
    <!-- Lust Item Draggable -->

    <draggable v-model="items" >
      <div v-for="element in items" :key="element.id">{{element.title}}</div>
    </draggable>

    <!-- Table Draggable -->
    <section class="min-w-[500px] min-h-[500px]">

      <table class="mx-auto">
          <thead>    
              <th class="pr-4" v-for="header in headers" :key="header" scope="col">
                {{ header }}
              </th>
          </thead>
     
          <draggable v-model="lists" tag="tbody">
            <tr v-for="item in lists" :key="item.judul">
              <td>{{ item.id }}</td>
              <td><img src="@/assets/drag.png" width="30" height="30" alt="">{{ item.judul }}</td>
              <td>{{ item.preview }}</td>     
              <td>{{ item.urutan }}</td>     
              <td>{{ item.link }}</td>     
              <td>{{ item.status }}</td>     
              <td>{{ item.aksi }}</td>     
            </tr>
          </draggable>
    
      </table>
     
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
              { id: 1, judul: 'Banner Input', preview: 'gambar', urutan: 1, link: 'https://google.com', status: true, aksi: 'Aksi'},
              { id: 2, judul: 'Banner Input', preview: 'gambar', urutan: 2, link: 'https://google.com', status: false, aksi: 'Aksi'},
              { id: 3, judul: 'Banner Input', preview: 'gambar', urutan: 3, link: 'https://google.com', status: false, aksi: 'Aksi'},
              { id: 4, judul: 'Banner Input', preview: 'gambar', urutan: 4, link: 'https://google.com', status: false, aksi: 'Aksi'}
            ],
            dragging: false
          };
    },
    components: { draggable }
};
</script>
