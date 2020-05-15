<template>
  <div>

      <PDFHeader v-bind='{fileName, curPage, pages}' />
      <PDFDocument v-bind='{url, scale, curPage}' />
      
  </div>
</template>

<script>
import PDFHeader from '../components/Document/PDFHeader.vue'
import PDFDocument from '../components/Document/PDFDocument.vue'

export default {
    name: 'Viewer',
    props: ['filePath', 'fileName'],
    data() {
        return {
            url: this.filePath,
            scale: 1.5,
            curPage: 1,
            pages: 1,
        }
    },
    components: {
        PDFHeader,
        PDFDocument,
    },
    created() {
        this.getPageNumbers()
    },
    methods: {
        // fetch page numbers for child component
        getPageNumbers: function() {
            import ('pdfjs-dist')
            .then(pdfjs => {
                pdfjs.getDocument(this.filePath)
                .then(pdf => {
                    this.pages = pdf.numPages;
                })
                .catch(err => {
                    console.log(err);
                    this.pages = 0;
                })
            })
            .catch(err => {
                console.log(err);
            });
        },

        // change page handler
        changePage: function(num) {
            this.curPage = num;
        }
    },
}
</script>

<style>

</style>