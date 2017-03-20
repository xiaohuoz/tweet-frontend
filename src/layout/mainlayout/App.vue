<template>
  <div id="test">
    <nav id = "header">
      <div class = "headerItem">
          <p><a href = "#">Home</a></p>
      </div>
      <div class = "headerItem">
        <ul class="headerLink">
          <li>
            <a href = "https://github.com/xiaohuoz">GitHub</a>
          </li>
          <li>
            <router-link to="/tweets">Tweets</router-link>
          </li>
          <li>
            <router-link to="/blogs">Blogs</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view class = "main"></router-view>
  </div>
</template>

<script>
export default {
  name: 'test'
}
</script>

<style>
a{
  text-decoration: none;
}
#test {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 0px;
}
#header{
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  display: flex;
  width:100%;
  height:50px;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  border-bottom:1px solid gray;
  box-shadow: 0px 0px 10px 0px gray;
  background-color: black;
  color: white;
  z-index: 999;
}
#header a{
  color: white;
}
.headerItem {
  flex:1;
}
.headerItem p{
  position: relative;
  left:20px;
}
.headerLink {
  position:relative;
  right: 20px;
  list-style: none;
  float: right;
}.headerLink ::after{
  clear: both;
}
.headerLink li{
  display:inline-block;
}
.main{
  position: relative;
  top:50px;
}
</style>
