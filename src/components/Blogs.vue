<template>
  <div class="content">
    <div class="blogs-add">
      <buttonAdd @click="dialogFormVisible = true"/>
    </div>
    <el-dialog title="add blogs" v-model="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="title" :label-width="formLabelWidth">
          <el-input v-model="form.title" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="type" :label-width="formLabelWidth">
          <el-input v-model="form.type" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="content" :label-width="formLabelWidth">
          <vue-html5-editor class='vue-html-editor' @change="updateData" :content="content" :height="300" :z-index="1000" :auto-height="true" :show-module-name="false"></vue-html5-editor>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleClick">确 定</el-button>
      </div>
    </el-dialog>
    <blog v-for = "item in blogs" v-on:ondelete = "handleDelete" v-bind:time = "item.time" v-bind:content = "item.content" v-bind:_id = "item._id"/>
  </div>
</template>
<script>
import tweet from '../staticComponents/tweet.vue'
import buttonAdd from '../staticComponents/button_Add.vue'
import { put } from '../service/blog.js'
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
        title: '',
        type: ''
      },
      formLabelWidth: '80px',
      blogs: []
    }
  },
  methods: {
    handleClick: function () {
      this.dialogFormVisible = false
      let json = {
        title: this.form.title,
        type: this.form.type,
        content: this.content
      }
      put(json).then(({ jsonResult }) => {
        console.log(jsonResult)
        this.blogs = jsonResult.data
      })
    },
    updateData: function (data) {
      this.content = data
    },
    handleDelete: function () {

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
  .vue-html-editor>.toolbar>ul>li>span[class~="icon"]{
    vertical-align: baseline;
  }
</style>
