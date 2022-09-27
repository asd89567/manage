<template>
<div style="padding: 10px">
  <div style="margin: 10px 0px;display: flex">
    <el-button type="primary">新稱</el-button>
    <el-button type="primary">導入</el-button>
    <el-button type="primary">導出</el-button>
  </div>

  <div style="margin: 10px 0px; width: 250px;display: flex">
    <el-input v-model:type="search" placeholder="請輸入內容"></el-input>
    <el-button type="primary" style="margin-left: 5px">查詢</el-button>
  </div>

  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed
        prop="date"
        label="日期"
        >
    </el-table-column>
    <el-table-column
        prop="name"
        label="姓名"
        >
    </el-table-column>

    <el-table-column
        prop="address"
        label="地址"
        >
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="200"
        >
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.row)" >編輯</el-button>
        <el-popconfirm
            title="这是一段内容确定删除吗？">
          <el-button size="mini" slot="reference">删除</el-button>
        </el-popconfirm>
      </template>
    </el-table-column>
  </el-table>

  <div style="margin: 10px 0px">
    <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5 , 10 , 15 , 20]"
        :page-size="10"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
  </div>
</div>
</template>
<script>

</script>

<script>
export default {
  name: "main",
  data() {
    return {
      search: '',
      currentPage: 1,
      total : 10,
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        },
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
    }
  },
  methods: {
    handleEdit(row) {
      console.log(row);
    },
    handleSizeChange(){

    },
    handleCurrentChange(){

    },
    currentPage(){

    }

  }
}
</script>

<style scoped>

</style>