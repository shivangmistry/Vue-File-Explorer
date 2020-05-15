<template>
    <div>
        <canvas id='pageCanvas'></canvas>
    </div>
</template>

<script>
export default {
    name: 'PDFDocument',
    props: ['url', 'scale', 'curPage'],
    created() {
        this.getPDFPage()
    },
    methods: {
        getPDFPage: function() {
            import('pdfjs-dist')
            .then(pdfjs => {
                pdfjs.getDocument(this.url)
                .then(pdf => {
                    pdf.getPage(this.curPage)
                    .then(page => {
                        const viewport = page.getViewport(this.scale);

                        const canvas = document.getElementById('pageCanvas');
                        canvas.height = viewport.height;
                        canvas.width = viewport.width;

                        const canvasContext = canvas.getContext('2d');
                        canvasContext.clearRect(0, 0, canvas.width, canvas.height);

                        const renderContext = { canvasContext, viewport }
                        page.render(renderContext).then(() => console.log('Page rendered'))
                    })
                    .catch(err => console.log(err));
                })
                .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
        }
    },
    watch: {
        curPage(){
            this.getPDFPage();
        }
    },
}
</script>

<style>
#pageCanvas {
    margin-top: 50px;
}
</style>