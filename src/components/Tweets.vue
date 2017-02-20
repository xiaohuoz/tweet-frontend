<template>
  <div class="content">
    <tweet v-for = "item in data" v-on:ondelete = "handleDelete" v-bind:time = "item.time" v-bind:content = "item.content" v-bind:_id = "item._id"/>
  </div>
</template>
<script>
import tweet from '../staticComponents/tweet.vue'
import {get, deleteById} from '../service/tweet'
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

</style>
