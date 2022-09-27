<template>
  <el-header>
<!--    左邊標題-->
    <div class="left_box">
      <img src="../assets/img/188331228_4547834468564304_123551034178293880_n.jpg">
      <span>一代一代</span>
    </div>
    <div class="right_box">
      <el-dropdown>
        <img src="../assets/img/188331228_4547834468564304_123551034178293880_n.jpg">
        <!--下拉菜单-->
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-house">首頁</el-dropdown-item>
          <el-dropdown-item icon="el-icon-ship">聊天</el-dropdown-item>
          <el-dropdown-item icon="el-icon-switch-button">退出登陸</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>

  </el-header>
</template>

<script>
export default {
  name: "header",
  data() {
    return {}
  }
}
</script>

<style scoped lang="less">

  .el-header {
    background-color: #001529;
    display: flex;
    justify-content: space-between;
    padding-left: 0;
    color: #FFFFFF;
    align-items: center;
    font-size: 20px;
    /*左邊logo和標籤*/

    .left_box {
      display: flex;
      align-items: center;
      /*logo*/
      img {
        width: 60px;
        height: 60px;
      }
      /*標題*/
      span{
        margin-left: 10px;
      }
    }
    /*右邊登陸頭像*/
    .right_box {
      .el-dropdown > img {
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #FFFFFF;
        margin: 4px 15px 0px 0px;
        background-size: contain;
      }
    }
  }

</style>