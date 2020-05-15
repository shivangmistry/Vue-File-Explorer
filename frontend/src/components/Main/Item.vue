<template>
    <div class="item" v-on:click="openItem">

        <i v-if="this.isDirectory" class="fa fa-folder-open" />
        <i v-if="!this.isDirectory" class="fa fa-file" />
        
        <div>
            {{this.itemName}}
        </div>

    </div>
</template>

<script>
export default {
    name: 'Item',
    props: ['itemName', 'isDirectory'],
    methods: {
      openItem: function() {
        //  call parent method
        this.$parent.openItem(this.itemName, this.isDirectory);
      }
    }
}
</script>

<style>
.item {
    cursor: pointer;
    margin: 10px 10px 0 0; 
    padding: 10px;
    box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1); 
    min-height: 175px;
    min-width: 125px;
    font-size: 15px;
    /* overflow: hidden; */
}

.item i {
    font-size: 100px;
    padding: 10px;
}
</style>