<template>

    <el-col style="width:200px;height: 100%" >
      <el-menu
          default-active="2"
          style="height: 100%"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#00DBDB"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>

            <el-menu-item index="1-4-1">选项1</el-menu-item>

        </el-submenu>

        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>

            <el-menu-item index="1-4-1">选项1</el-menu-item>

        </el-submenu>

        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>导航一</span>
          </template>

            <el-menu-item index="1-4-1">选项1</el-menu-item>


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
</style>