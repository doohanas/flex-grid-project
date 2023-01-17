<template>
  <div class="home">
    Hello Vue Draggable
    <draggable v-model="items" group="people" @start="drag=true" @end="drag=false">
      <div v-for="element in items" :key="element.id">{{element.title}}</div>
    </draggable>
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
            ]
        };
    },
    components: { draggable }
};
</script>
