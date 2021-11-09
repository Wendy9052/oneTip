<template>
  <div class="home_page">
    <!-- 可折叠菜单栏 -->
    <el-radio-group v-show="ifShowFoldableMenu" v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      v-show="ifShowFoldableMenu"
    >
      <el-sub-menu index="1">
        <template #title>
          <el-icon><location /></el-icon>
          <span>Navigator One</span>
        </template>
        <el-menu-item-group>
          <template #title><span>Tip One</span></template>
          <el-menu-item index="1-1" @click="toRegister()">toRegister</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="Group Two">
          <el-menu-item index="1-3">item three</el-menu-item>
        </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
          <template #title>Navigator Two</template>
        </el-menu-item>
      <el-menu-item index="3" disabled>
        <el-icon><document /></el-icon>
        <template #title>Navigator Three</template>
      </el-menu-item>
      <el-menu-item index="4">
        <el-icon><setting /></el-icon>
        <template #title>Navigator Four</template>
      </el-menu-item>
    </el-menu>
    <!-- 侧边菜单栏 -->
    <el-row class="tac" v-show="ifShowMenu">
      <el-col :span="12">
        <!-- <h5>Default colors</h5> -->
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
              <el-menu-item index="1-1" @click="toRegister()">register</el-menu-item>
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
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons'
export default defineComponent({
  components: {
    Location,
    Document,
    Setting,
    IconMenu,
  },
  setup() {
    const isCollapse = ref(true)
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      isCollapse,
      handleOpen,
      handleClose,
    }
  },
  data(){
    return {
      ifShowFoldableMenu: false, //是否显示可折叠菜单栏
      ifShowMenu: true, //是否显示菜单栏
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
    // 去注册页面
    toRegister() {
      this.$router.push({
        name:"List"
      })
    },
    // 点击注册
    onRegister(){
      this.ifShowFoldableMenu = false
    },
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