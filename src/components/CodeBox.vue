<template>
<div>
  <h1>Enter your received code</h1>
  <div class="code-box">
    <input type="text" v-model="inputCode" placeholder="Code Here">
    <span class="error-message">{{errorMessage}}</span>
    <div class="send-button">
      <button @click="checkCode()">Go!</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "codeBox",
  data() {
    return {
      inputCode: "",
      errorMessage: ""
    };
  },
  methods: {
    checkCode() {
      if (this.inputCode.replace(/\s/g, "").length === 10) {
        this.errorMessage = ""
      } else if (this.inputCode.replace(/\s/g, "").length === 0) {
        this.errorMessage = "Uhm, how about entering a code?"
      } else {
        this.errorMessage = "This code is not valid"
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.code-box {
  position: relative;
  width: 100%;
  min-height: 200px;
  background-color: #1579a0;
  padding: 20px;
  box-sizing: border-box;

  input {
    width: calc(100% - 20px);
    margin-bottom: 5px;
  }

  .send-button {
    position: absolute;
    right: 20px;
    bottom: 20px;
    text-align: right;
  }
}
</style>

