<template>
  <div class="container">
    <div class="login">
      <div class="login-text">
        <h4>登陆</h4>
      </div>
      <div class="login-user">
        <img src="../assets/账户.png">
        <input type="text" placeholder="请输入用户名" class="txt" autocomplete="off">
      </div>
      <div class="login-pass">
        <img src="../assets/密码.png">
        <input type="text" placeholder="请输入密码" class="txt">
      </div>
      <div class="login-true">
        <button class="sub">
          <router-link to="/main" class="login-deng">登陆</router-link>
        </button>
      </div>
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
  background-color: rgb(255, 255, 255);
  width: 100%;
  height: 100%;
}
.login {
  width: 25%;
  height: 40%;
  position: absolute;
  left: 600px;
  top: 200px;
}
.login img {
  height: 15px;
}
.login-user {
  padding-bottom: 10px;
  text-indent: 5px;
  background: transparent;
  border-radius: 0;
  color: #333;
  border-bottom: 1px solid #ebedf2;
  margin: 20px 20px auto;
}
.login-pass {
  padding-bottom: 10px;
  text-indent: 5px;
  background: transparent;
  border-radius: 0;
  color: #333;
  border-bottom: 1px solid #ebedf2;
  margin: 20px 20px auto;
}
.login-true {
  margin-top: 50px;
  text-align: center;
}
.sub {
   border-radius: 50px;
   width: 40%;
   height: 40px;
   background-color: rgb(103, 177, 255);
   border: none;
}
.login-deng{
  text-decoration: none;
  color: #ffffff;
  font: 15px;
}
.txt {
  border: none;
  width: 80%;
}
.txt :hover{
  border: none;
}
h4 {
  text-align: center;
  font-size: 22px;
}
input:focus, textarea:focus {
    outline: none;

}
</style>
