<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700');
@import './assets/style/all.scss';

body {
  margin: 0;
  padding: 0;
  font-family: 'Open Sans Condensed', sans-serif;
}

#app {
  // background-color: rgba(0, 0, 0, 0.8);
  background-color: black;
  color: #fff;
  min-height: 100vh;

  .view {
    padding: 20px;
    max-width: 1200px;
    margin: 0 auto;
  }
}
</style>
