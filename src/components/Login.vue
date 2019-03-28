<template>
  <div class="container">
    

    <div class="login">
      <div class="login-text">
        <h4>欢迎登陆</h4>
      </div>
      <div class="login-user">
        <img src="../assets/账户.png">
        <!-- <input type="text" placeholder="请输入用户名" class="txt" autocomplete="off"> -->
        <el-input v-model="input" placeholder="请输入内容" class="txt"></el-input>
      </div>
      <div class="login-pass">
        <img src="../assets/密码.png">
        <!-- <input type="text" placeholder="请输入密码" class="txt"> -->
        <el-input placeholder="请输入密码" v-model="input11" show-password class="txt"></el-input>
      </div>
      <div class="login-true">
        <router-link to="/main" class="login-deng">
          <button class="sub">登陆</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      input11: '',
      input:''
    };
  }
};
</script>


<style>
.container {
  background-image: url(https://cli2.avue.top/img/login.png);
  width: 100%;
  height: 100%;
}
.login {
  width: 25%;
  height: 40%;
  position: absolute;
  left: 550px;
  top: 200px;
  text-align: center;
}
.login img {
  height: 15px;
}
.login-text{
  border-bottom: 1px solid #ebedf2;
}
.login-user {
  padding-bottom: 10px;
  text-indent: 5px;
  background: transparent;
  border-radius: 0;
  color: #333;
  /* border-bottom: 1px solid #ebedf2; */
  margin: 20px 20px auto;
}
.login-pass {
  padding-bottom: 10px;
  text-indent: 5px;
  background: transparent;
  border-radius: 0;
  color: #333;
  /* border-bottom: 1px solid #ebedf2; */
  margin: 20px 20px auto;
}
.login-true {
  margin-top: 50px;
  text-align: center;
  border: none;
}
.sub {
  border-radius: 50px;
  width: 40%;
  height: 40px;
  background-color: rgb(103, 177, 255);
  border: none;
  color: #ffffff;
  font: 15px;
  outline: none;
}
.login-deng {
  text-decoration: none;
  border: none;
}
.txt {
  border: none;
  width: 80%;
  outline: none;
}
.txt :hover {
  border: none;
}
h4 {
  text-align: center;
  font-size: 22px;
}
input:focus,
textarea:focus {
  outline: none;
}

.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 150px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
     background-image: url(https://cli2.avue.top/img/login.png);
  }
  
  .el-carousel__item:nth-child(2n+1) {
     background-image: url(https://cli2.avue.top/img/login.png);
  }
</style>
