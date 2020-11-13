<!--
 * @Descripttion:
 * @version:
 * @Author: DuShaoDa
 * @Date: 2020-11-12 15:21:22
 * @LastEditors: DuShaoDa
 * @LastEditTime: 2020-11-13 09:06:07
-->
<template>
  <div class="hello">
    <h4>中国银行线上开卡申请单</h4>
    <el-input v-model="msg" placeholder="" size="normal" clearable @change="iChange"></el-input>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    iChange () {
      alert(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  text-align: center;
}
</style>
