<template>
  <div class = "container">
        <div class = "Model">
          <div class = "header">
            <div class = "headerTop"></div>
            <div class = "headerBody"></div>
          </div>
          <div class = "content">
            <div class = "contentTitle">
              Member Login
            </div>
            <input v-on:change="clearErrorMessage" v-model="username" type = "text" placeholder = "USERNAME"/>
            <input v-on:change="clearErrorMessage" v-model="password" type = "text" placeholder = "PASSWORD"/>
            <input v-on:change="clearErrorMessage" v-model="domain" type = "text" placeholder = "DOMAIN"/>
            <span style= "color:red">{{error}}</span>
            <input v-on:click="auth" type = "button" placeholder = "password" value="LOGIN"/>
            <a href = "#">跳过</a>
            <br />
            <a class = "link" href = "#">Forget Password?</a>
          </div>
        </div>
      </div>
</template>

<script>
import {login} from '../service/auth'
import Cookie from 'js-cookie'
export default {
  name: 'auth',
  data () {
    return {
      username: '',
      password: '',
      domain: '',
      error: ''
    }
  },
  methods: {
    auth () {
      const {username, password} = this
      login({username, password}).then(({jsonResult}) => {
        if (jsonResult.success === true) {
          Cookie.set('userInfo', jsonResult.data)
          this.$router.push({path: '/'})
        } else {
          this.error = jsonResult.message
        }
      })
    },
    clearErrorMessage () {
      this.error = ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
@model-width:300px;
@model-height:400px;
@header-width:@model-width * 0.3;
@header-height:@header-width;
@font-size:@model-width*0.12/2;
@input-height:@model-width*0.10;
.container {
  width:100%;
  height:100%;
  background-color:#F7DB56;
}
.Model{
  position:absolute;
  top:50%;
  left:50%;
  margin:-@model-height*0.5 0 0 -@model-width*0.5;
  width:@model-width;
  height:@model-height;
  background:white;
  box-shadow: 0px 0px 5px 5px #EFCF24;
  border-radius:@model-height*0.02;
}
.header{
  width:@header-width;
  height:@header-width;
  position:absolute;
  border-radius:50%;
  background:#21A957;
  top:-@header-height/2;
  right: @model-width/2 - @header-width/2 ;
}
.headerTop{
  width:@header-width*0.3;
  height:@header-height*0.3;
  background:white;
  position:absolute;
  border-radius:50%;
  top:50%;
  left:50%;
  margin:-@header-width*0.33 0 0 -@header-width*0.5*0.3;
}
.headerBody{
  position:absolute;
  width:@header-width*0.5;
  height:@header-height*0.25;
  border-radius:@header-height*0.25 @header-height*0.25 0 0;
  background:white;
  top:50%;
  left:50%;
  margin:-@header-width*0.05 0 0 -@header-width*0.5*0.5;
}
.content{
  text-align:center;
  margin:40px;
  height:calc(~'100%-20px');
}
.contentTitle{
  //text-align:center;
  font-size:@font-size*1.5;
}
.content input{
  width:100%;
  height:@input-height;
  background:#D3D3D3;
  border-width:none;
  border-style:none;
  border-radius:2px;
  margin:@input-height*0.3 0 @input-height*0.3 0;
  font-size:@font-size;
}
.content input[type="button"]{
  background:#21A957;
  color:#EFCF24;
  margin-bottom:@input-height*0.4;
}
.link{
  font-size:@font-size;
}
</style>
