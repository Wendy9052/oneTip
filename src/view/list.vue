<template>
  <div class="list_page">
    <el-tag @click="showTipOne()">TipOne</el-tag>
    <el-tag type="success" @click="showTipTwo()">TipTwo</el-tag>
    <el-tag type="warning" @click="showTipThree()">TipThree</el-tag>

    <el-card class="box-card" v-show="ifShowRegister">
      <template #header>
        <div class="card-header">
          <span>Register</span>
          <el-button class="button" type="text" @click="onClose()">
            close
          </el-button>
        </div>
      </template>
      <div class="register_box">
        <el-form class="register_form" ref="ruleForm" :model="ruleForm" :rules="rules" label-width="120px">
          <el-form-item label="你的名字" prop="name">
            <el-input v-model="ruleForm.name" placeholder="请输入你的名字"></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input v-model="ruleForm.phone" placeholder="请输入手机号"></el-input>
          </el-form-item>
          <el-form-item label="验证码" prop="valid_code">
            <div class="valid_box">
              <el-input v-model="ruleForm.valid_code"></el-input>
              <valid-code></valid-code>
            </div>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="ruleForm.password" placeholder="请输入密码"></el-input>
          </el-form-item>
        </el-form>
         <el-button class="register_btn" type="primary" :disabled="btn_disabled" plain @click="onRegister()">Register</el-button>
      </div>
    </el-card>

    <!-- 提示框 -->
    <el-alert v-show="ifShowTip" center :title="tipContent" type="warning" @close="closeTip()"></el-alert>
  </div>
</template>

<script>
import  ValidCode  from "@/components/VerificationCode";
// import {
//   mapActions,
//   mapState
// } from 'vuex';
export default {
  components: {
    ValidCode,
  },
  data () {
    return {
      tipContent: "", //提示内容
      ifShowTip: false, //是否显示提示窗
      btn_disabled: false, //注册按钮调接口防并发
      codeList: [],
      ifShowRegister: true, //是否显示注册框
      ruleForm: {   //表单输入项
        name: '',
        phone: '',
        valid_code: '',
        password: '',
      },
      rules: {
        name: [
          {
            required: true,
            message: 'Please input your name',
            trigger: 'blur',
          },
        ],
        phone: [
          {
            required: true,
            message: 'Please input your phone',
            trigger: 'blur',
          },
        ],
        valid_code: [
          {
            required: true,
            message: 'Please input valid code',
            trigger: 'blur',
          },
        ],
        password: [
          {
            required: true,
            message: 'Please input your password',
            trigger: 'blur',
          },
        ]
      }
    }
  },
  mounted () {

  },
  methods: {
    // 打开第三项——未知页面
    showTipThree() {
      this.ifShowRegister = false
    },
    // 打开第二项——未知页面
    showTipTwo() {
      this.ifShowRegister = false
    },
    // 打开第一项——注册页面
    showTipOne() {
      this.ifShowRegister = true
    },
    // 关闭注册页面
    onClose() {
      this.ifShowRegister = false
    },
    // 关闭提示
    closeTip() {
      this.ifShowTip = false
    },
    // 点击注册
    onRegister() {
      this.btn_disabled = true
      // 判断所填的值为空则提示完善
      for(let i in this.ruleForm){
        if(!this.ruleForm[i]){
          this.tipContent = "请完善信息"
          this.ifShowTip = true
          this.btn_disabled = false
          return
        } 
      }
      // 存值
      this.$store.commit('setRegisterInfo',this.ruleForm)
      // 跳转到about页面 查看注册的消息
      this.$router.push({
        name:"About"
      })
    },
  }
}
</script>

<style scoped lang="scss">
.list_page{
  .el-tag{
    margin: 15px;
  }
  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .register_box{
    height: auto;
    .register_btn{
      width: 70%;
    }
    .register_form{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // background: #ccc;
      padding-right: 15%;
      .valid_box{
        // background: #ccc;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
      }
    }
    
  }
}
</style>
