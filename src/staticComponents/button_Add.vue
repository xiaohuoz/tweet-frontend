<template>
  <button v-on:click="handleClick" class="button-add" draggable="true">
    <i class="el-icon-plus"></i>
  </button>
</template>
<script>
export default {
  name: 'buttonAdd',
  data () {
    return {
      ismousedown: false
    }
  },
  methods: {
    handleClick: function () {
      this.$emit('click')
    }
  }
}
</script>
<style>
  .button-add {
    border-radius: 50%;
    width:50px;
    height:50px;
    background: #FFC125;
    padding: 0px;
    cursor: pointer;
    outline: none;
    border: 0;
  }
  .button-add:hover {
    background: #FFD700;
    border-color:#FFD700;
  }
  .button-add :active{
    background: #FFD700;
    border-color:#FFD700;
  }
  .button-add :focus{
    background: #FFD700;
    border-color:#FFD700;
  }
</style>
