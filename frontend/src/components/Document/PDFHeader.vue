<template>
  <header class='pdfHeader'>
        
        <div class='icons'>
            <i v-on:click='goBack()' class='fa fa-arrow-left fa-10x'></i>
        </div>
        
        <div class='pdfInteractables'>
            <span>
                {{this.fileName}}
            </span>
            
            <span class='icons' v-on:click='loadPrevPage()'>
                <i class='fa fa-angle-left'></i>
            </span>
            
            {{this.page}} / 
            {{this.pages}}

            <span class='icons' v-on:click='loadNextPage()'>
                <i class='fa fa-angle-right'></i>
            </span>
        </div>

  </header>
</template>

<script>
import router from '../../router.js'

export default {
    name: 'PDFHeader',
    props: ['fileName', 'curPage', 'pages'],
    data() {
        return {
            page: this.curPage,
        }
    },
    methods: {
        // exit file view mode and go to directory
        goBack: function(){
            router.go(-1);
        },

        // go to previous page
        loadPrevPage: function() {
            if(this.page>1) {
                this.page -= 1;   
                this.$parent.changePage(this.page);
            }
        },

        // go to next page
        loadNextPage: function() {
            if(this.page<this.pages) {
                this.page += 1;
                this.$parent.changePage(this.page);
            }
        },
    },
}
</script>

<style>
.pdfHeader {
    display: flex;
    align-items: center;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 1;
}

.pdfInteractables {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.pdfInteractables i {
    margin: 0 10px;
}
</style>