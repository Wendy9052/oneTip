<template>
  <div class="about_page">
    <el-table :data="tableData" border style="width: 100%">
      <el-table-column prop="name" label="姓名：" />
      <el-table-column prop="phone" label="电话：" />
      <el-table-column prop="valid_code" label="验证码：" />
      <el-table-column prop="password" label="密码：" />
    </el-table>
    <div class="back_box" >
      <el-button type="primary" @click="toList()" plain>Back to List</el-button>
    </div>
  </div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
export default {
  data(){
    return {
    }
  },
  computed: {
    ...mapGetters(['registerInfo']),
    tableData() {
      // 在进行Vue项目开发的时候，遇到控制台错误提示“TypeError: data.indexOf is not a function"的错误。
      // 原因：表格显示需要数组包含对象的形式，每个对象是一行数据，拿到的数据格式不对。
      // 解决措施：确保拿到的表格数据显示类型为数组。
      let data_arr  = []
      data_arr.push(this.registerInfo) 
      return data_arr
    }
  },
  methods: {
    // 返回到list页面
    toList() {
      this.$router.replace({
        name:"List"
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.about_page {
  .back_box{
    display: flex;
    justify-content: center;
    .el-button {
      display: block;
      position: fixed;
      width: 80%;
      bottom: 5%;
      margin: 0 auto;
    }
  }
  
}
</style>