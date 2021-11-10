<template>
  <div>
    about page
    <!-- <div>{{registerInfo}}</div> -->
    <div>姓名：{{registerInfo.name}}</div>
    <div>电话：{{registerInfo.phone}}</div>
    <div>验证码：{{registerInfo.valid_code}}</div>
    <div>密码：{{registerInfo.password}}</div>
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
    ...mapGetters(['registerInfo'])
  },
  methods: {

  }
}
</script>

<style>

</style>