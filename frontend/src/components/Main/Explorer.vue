<template>
  <div class="explorer">
    <span v-for="(file, index) in folderContent" v-bind:key="`folderContent-${index}`" >
      <Item v-bind:itemName="file.name" v-bind:isDirectory="file.isDirectory" />
    </span>
  </div>
</template>

<script>
import Item from './Item'

export default {
    name: 'Explorer', 
    props: ['folderContent'],
    components: {
      Item,
    },
    methods: {
      openItem: function(name, isDirectory) {
        // call parent method
        this.$parent.openItem(name, isDirectory);
      },
    }
}
</script>

<style>
.explorer {
  text-align: left;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
}
</style>