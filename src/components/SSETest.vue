<template>
  <div>
    <h1>Welcome to my personal website</h1>
    <button v-on:click="handleOpen">打开</button>
    <button v-on:click="handleClose">关闭</button>
  </div>
</template>
<script>
export default {
  name: 'home',
  data () {
    return {
      messages: [],
      source: null
    }
  },
  methods: {
    handleOpen () {
      var url = '/sse'
      var source = new EventSource(url, { withCredentials: true })
      source.addEventListener('open', function (event) {

      }, false)
      source.onmessage = function (event) {
        var data = event.data
        var date = new Date()
        console.log(data, date)
      }
      this.source = source
    },
    handleClose () {
      var source = this.source
      source.close()
    }
  }
}
</script>
<style>

</style>
