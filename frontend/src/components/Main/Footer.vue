<template>
  <footer>
        <span class="footerLabel">
            PDF Files: {{pdfCount}}
        </span>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
    props: ['pdfCount'],
}
</script>

<style>
footer {
    width: 100%;
    height: 5vh;
    display: flex;
    align-items: center;
    color: rgba(0,0,0,.87);
    background-color: #d8d8d8;
    position: absolute;
    bottom: 0;
}

.footerLabel {
    padding-left: 10px;
}
</style>