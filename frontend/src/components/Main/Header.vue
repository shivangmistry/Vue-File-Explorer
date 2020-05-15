<template>
    <header class='mainHeader'>
        
        <div class='icons'>
            <i v-on:click='goBack()' class='fa fa-arrow-left fa-10x'></i>
            <i v-on:click='goHome()' class='fa fa-home fa-10x'></i>
        </div>
        
        <div id='hierarchy'>
            <span v-for="(path, index) in paths" v-bind:key="`path-${index}`" v-on:click='navigate(path.path, index)' class='path'>
                {{path.name}} > 
            </span>
        </div>

    </header>
</template>

<script>
export default {
    name: 'Header',
    props: ['paths'],
    methods: {
        // navigate to directories
        navigate: function (path, index) {
            this.$parent.getDirectory(index);
        },

        // home handler
        goHome: function() {
            this.$parent.goHome();
        },

        // back handler
        goBack: function() {
            this.$parent.goBack();
        }
    }
}
</script>

<style>
.mainHeader {
    display: flex;
    align-items: center;
}

span.path {
    cursor: pointer;
}

span.path:hover {
    text-decoration: underline;
}
</style>