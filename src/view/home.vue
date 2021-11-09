<template>
  <div class="home_page">
    <!-- 侧边菜单栏 -->
    <el-row class="tac" v-show="ifShowMenu">
      <el-col :span="12">
        <h5>Default colors</h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
        >
          <el-sub-menu index="1">
            <template #title>
              <el-icon><location /></el-icon>
              <span>TipOne</span>
            </template>
            <el-menu-item-group title="Group One">
              <el-menu-item index="1-1" @click="onRegister()">register</el-menu-item>
              <el-menu-item index="1-2">item one</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group Two">
              <el-menu-item index="1-3">item three</el-menu-item>
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>item four</template>
              <el-menu-item index="1-4-1">item one</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
          <el-menu-item index="2">
            <el-icon><icon-menu /></el-icon>
            <span>Navigator Two</span>
          </el-menu-item>
          <el-menu-item index="3" disabled>
            <el-icon><document /></el-icon>
            <span>Navigator Three</span>
          </el-menu-item>
          <el-menu-item index="4">
            <el-icon><setting /></el-icon>
            <span>Navigator Four</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <!-- 注册框 -->
    <el-card class="box-card" v-show="ifShowRegister">
      <template #header>
        <div class="card-header">
          <span>注册</span>
          <el-button class="button" type="text" @click="onClose()">
            close
          </el-button>
        </div>
      </template>
      <div class="register_box">
        <el-form class="register_form" ref="form" :model="form" label-width="120px">
          <el-form-item label="*你的名字">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="*手机号">
            <el-input v-model="form.phone"></el-input>
          </el-form-item>
          <el-form-item label="">
            <el-col :span="10">
              <el-input v-model="form.valid_code"></el-input>
            </el-col>
            <el-col class="line" :span="4">  </el-col>
            <el-col :span="10" class="valid_box">
              <valid-code :width="100"></valid-code>
            </el-col>
          </el-form-item>
          <el-form-item label="*密码">
            <el-input v-model="form.password"></el-input>
          </el-form-item>
        </el-form>
      </div>
      
    </el-card>
  </div>
</template>

<script>

import  ValidCode  from "@/components/VerificationCode";
import { defineComponent } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'
export default defineComponent({
  components: {
    ValidCode,
    Location,
    Document,
    Setting,
    IconMenu,
  },
  data(){
    return {
      ifShowMenu: true, //是否显示菜单栏
      ifShowRegister: false, //是否显示注册框
      input: "",
      form: {   //表单输入项
        name: '',
        phone: '',
        valid_code: '',
        password: '',
      },
    }
    // validCode:[]
    
  },
  methods: {
    // 点击注册
    onRegister(){
      this.ifShowRegister = true
      this.ifShowMenu = false
    },
    // 关闭注册页面
    onClose(){
      this.ifShowRegister = false
      this.ifShowMenu = true
    }
  }
})
</script>

<style lang="scss" scoped>
.home_page{
  .card-header{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .register_box{
    height: auto;
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
        justify-content: center;
        align-items: center;
        overflow: hidden;
      }
    }
    
  }
}
</style>