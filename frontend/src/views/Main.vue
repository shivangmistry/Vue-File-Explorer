<template>
  <div id="app">
    <Header v-bind:paths="stack"/>
    <Explorer v-bind='{folderContent}'/>
    <Footer v-bind='{pdfCount}' />
  </div>
</template>

<script>
import axios from 'axios';

import Header from '../components/Main/Header.vue'
import Explorer from '../components/Main/Explorer.vue'
import Footer from '../components/Main/Footer.vue'
import { rootUrl } from '../config/rootUrl'
import router from '../router.js'

export default {
  name: 'App',
  data() {
    return {
      stack: [{'name': 'Home', 'path': '/'}],
      folderContent: [],
      pdfCount: 0,
    }
  },
  components: {
    Header,
    Explorer,
    Footer,
  },
  async created() {
    // on create open most recent directory
    if(localStorage.backstack) {
      this.stack = JSON.parse(localStorage.backstack);
    }
    this.getDirectory(this.stack.length-1);
  }, 
  methods: {
    // open directory from stack at index
    getDirectory: async function(index) {
      try {
        // pop rest of the elements from stack
        this.stack = this.stack.splice(0, index+1);

        const res = await axios.get(rootUrl + '?path=' + this.stack[index].path);
        if(res.data.message==="error") {
          alert(res.data.data);
        } else {
          this.folderContent = res.data.data;
          this.pdfCount = res.data.pdfCount;
        }
      } catch(e) {
        console.log(e);
      }
    },

    // open new directory
    openDirectory: function(name) {
      let l = this.stack.length;
      const path = this.stack[l-1].path + name + '/';

      this.stack.push({'name': name, 'path': path});
      this.getDirectory(l);
    },

    // request to open file or directory
    openItem: async function(name, isDirectory) {
      if(isDirectory) {
        this.openDirectory(name);
      } else {
          const filePath = rootUrl + this.stack[this.stack.length-1].path + name;

          // change view to access pdf
          router.push({ name:'document', path: 'document', params: { filePath, fileName: name }});
      }
    },

    // home handler
    goHome: function() {
      if(this.stack.length>1) {
        this.getDirectory(0);
      }
    },

    // back handler
    goBack: function() {
      if(this.stack.length>1) {
        this.stack.pop();
        this.getDirectory(this.stack.length-1);
      }
    },
  },
  watch: {
    stack(){
      // store most recent directory in local storage
      localStorage.backstack = JSON.stringify(this.stack);
    }
  },
}
</script>

<style>

</style>