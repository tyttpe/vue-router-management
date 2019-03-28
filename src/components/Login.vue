<template>
  <div class="container">
    <div class="login">
        <router-link to="/main">登陆</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  }
};
</script>


<style>
.container {
  background-image: url(../assets/color-bg.jpg);
  background-size: 100%;
  width: 100%;
  height: 100%;
}
.login{
  width: 25%;
  height: 25%;
  background-color: blue;
}
</style>
