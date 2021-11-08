<template>
  <div class="home_page">
    <valid-code></valid-code>
  </div>
</template>

<script>
import  ValidCode  from "@/components/VerificationCode";
export default {
  components: {
    ValidCode
  },
  data(){
    // validCode:[]
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>
.home_page{
  color:red
}
</style>