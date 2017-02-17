<template>
  <div class="content">
    <tweet v-for = "item in data" v-bind:date = "item.date" v-bind:content = "item.content"/>
  </div>
</template>
<script>
import tweet from '../staticComponents/tweet.vue'
function gernerateData (n) {
  var result = []
  for (var i = 0; i < n; i++) {
    result.push({
      date: new Date(),
      content: 'qweqwe'
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
  methods () {

  }
}
</script>
<style>

</style>
