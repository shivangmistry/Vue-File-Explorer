<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
body {
  margin: 0;
}

#app {
  margin: 0;
  font-family: 'Poppins', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
    margin: 0;
    color: rgba(0,0,0,.87);
    background-color: #f5f5f5;
    box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.473);
}

.icons {
    font-size: 30px;
    padding-right: 5px;
}

.icons i {
    cursor: pointer;
    padding: 10px;
}

.icons i:hover {
    background-color: #d8d8d8;
}
</style>
