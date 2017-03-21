<template>
  <div class="content">
    <div class="blogs-add">
      <buttonAdd @click="dialogFormVisible = true"/>
    </div>
    <el-dialog title="add blogs" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="content" :label-width="formLabelWidth">
          <vue-html5-editor :content="content" :height="500" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import tweet from '../staticComponents/tweet.vue'
import buttonAdd from '../staticComponents/button_Add.vue'
export default {
  components: {
    tweet,
    buttonAdd
  },
  name: 'blogs',
  data () {
    return {
      content: '',
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    handleClick: function () {

    }
  }
}
</script>
<style>
  .content{
    padding: 20px;
  }
  .blogs-add{
    position: fixed;
    bottom: 60px;
    right: 60px;
  }
</style>
