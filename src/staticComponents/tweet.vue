<template>
<div class = "tweet">
  <div class = "tweet-time">
    {{date.getFullYear()+'年'+date.getMonth()+1+'月'+date.getDay()+'日'}}
  </div>
  <div class = "tweet-content">
    {{content}}
  </div>
</div>
</template>
<script>
export default {
  props: {
    date: {
      type: Date
    },
    content: {
      type: String
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
</style>
