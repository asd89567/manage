<template>
    <el-container style="height: 100%">
      <el-header>
          <HeaderPage></HeaderPage>
      </el-header>
      <el-container>
        <el-aside style="width: 200px">
          <Left_container></Left_container>
        </el-aside>
        <el-main class="mainpage">
          <Mainpage></Mainpage>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>

import Left_container from "@/components/Left_container";
import Mainpage from "@/components/Mainpage";
import HeaderPage from "@/components/HeaderPage";

export default {
  name: "",
  data() {
    return {}
  },
  components:{
    Left_container,
    HeaderPage,
    Mainpage,

  }
}
</script>

<style scoped>

  .el-header{
    background-color: #66b1ff;
  }

  .el-aside {
    background-color: #001529;
  }
  .el-menu {
    border-right: none;
  }


</style>