<template>
<div class = "tweet">
  <div class = "tweet-time">
    {{time.getFullYear()+'年'+(time.getMonth()+1)+'月'+time.getDate()+'日'}}
  </div>
  <div class = "tweet-content">
    {{content}}
  </div>
  <div v-on:click = "ondelete" class = "tweet-delete">
    <el-button type="primary" icon="delete">删除</el-button>
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
      if (confirm('删除这条信息?')) {
        this.$emit('ondelete', this._id)
      }
    }
  }
}
</script>
<style>
  .tweet{
    display: flex;
    flex-direction: row;
    margin: 4px;
    border-radius: 4px;
  }
  .tweet-time{
    display: flex;
    width:120px;
    border-left: 6px solid red;
  }
  .tweet-content{
    flex: 11;
  }
  .tweet-delete button{
    float: right;
  }
</style>
