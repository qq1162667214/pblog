<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    {{msg}}
  </div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import {testDjango} from './apis/test'
export default {
  name: 'home',
  data() {
    return {
      msg: '后台服务尚未运行'
    }
  },
  methods: {
    updateMsg(data) {
      console.log(data)
      this.msg = data.msg
    }
  },
  mounted() {
    testDjango(this.updateMsg)
  }
}
</script>
