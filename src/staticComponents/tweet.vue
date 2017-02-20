<template>
<div class = "tweet">
  <div class = "tweet-time">
    {{time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日'}}
  </div>
  <div class = "tweet-content">
    {{content}}
  </div>
  <div v-on:click = "ondelete" class = "tweet-delete">
    删除
  </div>
</div>
</template>
<script>
export default {
  name: 'tweet',
  props: {
    time: {
      type: Date
    },
    content: {
      type: String
    },
    _id: {
      type: String
    }
  },
  methods: {
    ondelete: function () {
      this.$emit('ondelete', this._id)
    }
  }
}
</script>
<style>
  .tweet{
    display: flex;
    flex-direction: row;
  }
  .tweet-time{
    width:120px;
  }
  .tweet-content{
    flex: 4;
    flex-grow:1
  }
  .tweet-delete{
    flex:1;
  }
</style>
