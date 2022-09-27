<template>

    <el-col style="width:200px;height: 100%" >
      <el-menu
          default-active="1-1"
          style="height: 100%"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="white"
          text-color="#9C9C9C"
          active-text-color="#00D6D6"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>看三小</span>
          </template>

            <el-menu-item index="1-1">看三小</el-menu-item>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>看三小</span>
          </template>

            <el-menu-item index="2-1">看三小</el-menu-item>

        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>看三小</span>
          </template>

            <el-menu-item index="3-1">看三小</el-menu-item>


        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "",
  data() {
    return {}
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
  .el-menu{
    border-right: none;
  }
  span{
    color: black;
  }
  .el-menu-item{
    padding-right: 0px !important;
  }
  .el-menu-vertical-demo el-menu{
    color: #42b983 !important;
  }
  .el-submenu{
    text-align: left;
  }
  .el-menu-item {
    padding-left: 60px !important;
  }
  </style>