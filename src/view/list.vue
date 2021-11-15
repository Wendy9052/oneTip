<template>
  <div class="list_page">
    <el-tag @click="showTipOne()">TipOne</el-tag>
    <el-tag type="success" @click="showTipTwo()">TipTwo</el-tag>
    <el-tag type="warning" @click="showTipThree()">TipThree</el-tag>

    <!-- TipOne_register -->
    <el-card class="box-card" v-show="ifShowRegister">
      <template #header>
        <div class="card-header">
          <span>{{title_text}}</span>
          <el-button class="button" type="text" @click="onClose()">
            close
          </el-button>
        </div>
      </template>
      <div class="register_box">
        <el-form
          class="register_form"
          ref="ruleForm"
          :model="ruleForm"
          :rules="rules"
          label-width="120px"
        >
          <el-form-item label="你的名字" v-if="title_text == 'Register'" prop="name">
            <el-input
              v-model="ruleForm.name"
              placeholder="请输入你的名字"
            ></el-input>
          </el-form-item>
          <el-form-item label="手机号" prop="phone">
            <el-input
              v-model="ruleForm.phone"
              placeholder="请输入手机号"
            ></el-input>
          </el-form-item>
          <el-form-item label="验证码" v-if="title_text == 'Register'" prop="valid_code">
            <div class="valid_box">
              <el-input v-model="ruleForm.valid_code"></el-input>
              <valid-code></valid-code>
            </div>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              v-model="ruleForm.password"
              placeholder="请输入密码"
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button
          class="register_btn"
          type="primary"
          :disabled="btn_disabled"
          plain
          @click="onLogin()"
          >{{title_text}}</el-button
        >
      </div>
    </el-card>

    <!-- TipTwo_img -->
    <div v-show="ifShowImg" v-for="(item) in img_list" :key="item.id">
      <el-image :src="item.url"></el-image>
    </div>

    <!-- TipThree_map -->
    <div v-show="ifShowMap">
      {{ demo_1 }}
      {{ demo_2 }}
      {{ demo_3 }}
      <div v-for="(item,index) in mapList" :key="index">
        {{ item }}
        {{ "value:" + item[index] }}
      </div>
    </div>

    <!-- 提示框 -->
    <el-alert
      v-show="ifShowTip"
      center
      :title="tipContent"
      type="warning"
      @close="closeTip()"
    ></el-alert>
  </div>
</template>

<script>
import axios from 'axios'
import { mapState,mapGetters } from "vuex";
import ValidCode from "@/components/VerificationCode.vue";
import { getList,registerSave } from "@/api/api"
// import {
//   mapActions,
//   mapState
// } from 'vuex';
export default {
  components: {
    ValidCode,
  },
  data() {
    return {
      title_text: "", //登录或注册
      demo_1: null,
      demo_2: null,
      demo_3: null,
      mapList: [], //测试用map
      ifShowMap: false, //使用map测试
      ifShowImg: false, //是否显示图片
      img_list: [], //图片列表
      tipContent: "", //提示内容
      ifShowTip: false, //是否显示提示窗
      btn_disabled: false, //注册按钮调接口防并发
      codeList: [],
      ifShowRegister: false, //是否显示注册框
      ruleForm: {
        //表单输入项
        name: "",
        phone: "",
        valid_code: "",
        password: "",
      },
      rules: {
        name: [
          {
            required: true,
            message: "Please input your name",
            trigger: "blur",
          },
        ],
        phone: [
          {
            required: true,
            message: "Please input your phone",
            trigger: "blur",
          },
        ],
        valid_code: [
          {
            required: true,
            message: "Please input valid code",
            trigger: "blur",
          },
        ],
        password: [
          {
            required: true,
            message: "Please input your password",
            trigger: "blur",
          },
        ],
      },
    };
  },
  computed: {
    ...mapGetters(['registerInfo']),
  },
  mounted() {},
  methods: {
    // 打开第三项——未知页面
    showTipThree() {
      this.ifShowRegister = false;
      this.ifShowImg = false;
      this.ifShowMap = true;
      let map = new Map() //定义一个空的map
      map.set("name","harry")
      map.set(true,"boolean")
      map.set(1,"number")
      console.log("map",map)
      this.mapList = map
      this.demo_1 = map.get("name")
      this.demo_2 = map.get(true)
      this.demo_3 = map.get(1)
    },
    // 打开第二项——未知页面
    async showTipTwo() {
      this.ifShowMap = false
      this.ifShowRegister = false;
      await getList().then(res => {
        console.log(res)
        console.log("xxx",res.data.body.listImg);
        this.img_list = [];
        for(let i in res.data.body.listImg) {
          this.img_list.push(res.data.body.listImg[i]);
        }
        console.log("ddd",this.img_list);
        this.ifShowImg = true
      }).catch(err => {
        console.log(err);
      })
      // axios({
      //   url: "/api/getList",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // }).then((res) => {
      //   console.log(res)
      //   console.log("xxx",res.data.body.listImg);
      //   this.img_list = [];
      //   for(let i in res.data.body.listImg) {
      //     this.img_list.push(res.data.body.listImg[i]);
      //   }
      //   console.log("ddd",this.img_list);
      //   this.ifShowImg = true
      // }).catch((rej) => {
      //   console.log(rej);
      // });
    },
    // 打开第一项——注册页面
    showTipOne() {
      this.title_text = "Register"
      this.ifShowRegister = true;
      this.ifShowImg = false;
      this.ifShowMap = false;
    },
    // 关闭注册页面
    onClose() {
      this.ifShowRegister = false;
    },
    // 关闭提示
    closeTip() {
      this.ifShowTip = false;
    },
    // 点击登录
    async onLogin() {
      // this.btn_disabled = true;
      // 判断所填的值为空则提示完善
      for (let i in this.ruleForm) {
        if (!this.ruleForm[i]) {
          this.tipContent = "请完善信息";
          this.ifShowTip = true;
          // this.btn_disabled = false;
          return;
        }
      }
      // 存值
      console.log("this.title_text",this.title_text)
      if(this.title_text == "Register") {
        this.$store.commit("setRegisterInfo", this.ruleForm);
        this.title_text = "Login"
        this.ruleForm.phone = ""
        this.ruleForm.password = ""
        // this.btn_disabled = false;
      }else {
        console.log("登录")
        console.log("phone:",this.ruleForm.phone)
        console.log("password:",this.ruleForm.password)
        let data = {
          phone: this.ruleForm.phone,
          password: this.ruleForm.password
        }
        await registerSave(data).then(res => {
          console.log("res",res)
        })
      }
      console.log("this.title_text2",this.title_text)
      // 跳转到about页面 查看注册的消息
      // this.$router.push({
      //   name: "About",
      // });
    },
  },
};
</script>

<style scoped lang="scss">
.list_page {
  .el-tag {
    margin: 15px;
  }
  .card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .register_box {
    height: auto;
    .register_btn {
      width: 70%;
    }
    .register_form {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      // background: #ccc;
      padding-right: 15%;
      .valid_box {
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
