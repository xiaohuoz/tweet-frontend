<template>
  <div class="content">
    <div class="tweet-add">
      <el-button type="primary" draggable="true" icon ="plus" v-on:click="handleclick"></el-button>
    </div>
    <tweet v-for = "item in data" v-on:ondelete = "handleDelete" v-bind:time = "item.time" v-bind:content = "item.content" v-bind:_id = "item._id"/>
  </div>
</template>
<script>
import tweet from '../staticComponents/tweet.vue'
import {get, deleteById, put} from '../service/tweet'
function gernerateData (n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push({
      time: new Date(),
      content: 'qweqwe',
      _id: Math.floor(Math.random() * 1000) + ''
    })
  }
  return result
}
export default {
  components: {
    tweet
  },
  name: 'home',
  data () {
    return {
      data: gernerateData(10)
    }
  },
  methods: {
    handleDelete (key) {
      console.log(key)
      deleteById(key).then(({jsonResult}) => {
        if (jsonResult.success === true) {
          jsonResult.data = jsonResult.data.map((item) => {
            item.time = new Date(item.time)
            return item
          })
          this.data = jsonResult.data
        }
      })
    },
    handleclick () {
      this.$prompt('Please input whatever you want', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel'
      }).then(({value}) => {
        console.log(value)
        put(value).then(({jsonResult}) => {
          console.log(jsonResult)
          if (jsonResult.success === true) {
            jsonResult.data = jsonResult.data.map((item) => {
              item.time = new Date(item.time)
              return item
            })
            this.data = jsonResult.data
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: 'Input canceled'
        })
      })
    }
  },
  created: function () {
    get().then(({jsonResult}) => {
      if (jsonResult.success === true) {
        jsonResult.data = jsonResult.data.map((item) => {
          item.time = new Date(item.time)
          return item
        })
        this.data = jsonResult.data
      } else {
        alert('tweet 请求失败')
      }
    })
  }
}
</script>
<style>
  .content{
    padding: 20px;
  }
  .tweet-add{
    position: fixed;
    bottom: 60px;
    right: 60px;
  }
  .tweet-add button{
    border-radius: 50%;
    width:50px;
    height:50px;
    background: #FFC125;
    border-color:#FFC125;
  }
  .tweet-add button:hover{
    background: #FFD700;
    border-color:#FFD700;
  }
  .tweet-add button:active{
    background: #FFD700;
    border-color:#FFD700;
  }
  .tweet-add button:focus{
    background: #FFD700;
    border-color:#FFD700;
  }
</style>
