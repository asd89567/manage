<template>
<div style="padding: 10px">
  <div style="margin: 10px 0px;display: flex">
    <el-button type="primary" @click="add">新增</el-button>
    <el-button type="primary">導入</el-button>
    <el-button type="primary">導出</el-button>
  </div>

  <div style="margin: 10px 0px; width: 250px;display: flex">
    <el-input v-model:type="search" placeholder="請輸入內容"></el-input>
    <el-button type="primary" style="margin-left: 5px" @click="load">查詢</el-button>
  </div>

  <el-table
      :data="tableData"
      border
      style="width: 100%">
    <el-table-column
        fixed

        prop="id"
        label="ID"
        >
    </el-table-column>
    <el-table-column
        prop="username"
        label="姓名"
        >
    </el-table-column>

    <el-table-column
        prop="nickname"
        label="暱稱"
        >
      <template slot-scope="scope">{{scope.row.nickname?scope.row.nickname:'--'}}</template>
    </el-table-column>
    <el-table-column
        prop="age"
        label="年齡"
    >
    </el-table-column>
    <el-table-column
        prop="sex"
        label="性別"
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
            @confirm="handledelete(scope.row.id)"
            confirmButtonText='確定'
            cancelButtonText='取消'
            title="確定刪除嗎？">
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
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper "
        :total="total">
    </el-pagination>

    <el-dialog
        title="提示"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose">
      <el-form ref="form" :model="form" label-width="120px" class="formlabel">
          <el-form-item label="用戶名" >
          <el-input v-model="form.username" style="width: 80%;"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="120px" class="formlabel">
        <el-form-item label="暱稱" >
          <el-input v-model="form.nickName" style="width: 80%;"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="120px" class="formlabel">
        <el-form-item label="年齡" >
          <el-input v-model="form.age" style="width: 80%;"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="120px" class="formlabel">
        <el-form-item label="地址" >
          <el-input type="textarea" v-model="form.address" style="width: 80%;"></el-input>
        </el-form-item>
      </el-form>
      <el-form ref="form" :model="form" label-width="120px" >
        <el-form-item label="性別" >
          <el-radio v-model="form.radio" label="男生" >男生</el-radio>
          <el-radio v-model="form.radio" label="女生">女生</el-radio>
          <el-radio v-model="form.radio" label="第三性別">第三性別</el-radio>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="save" >確 定</el-button>
      </span>
    </el-dialog>

  </div>
</div>
</template>

<script>

import axios from "axios";
export default {
  name: "main",
  data() {
    return {
      form: {},
      dialogVisible: false,
      search: '',
      currentPage: 1,
      pageSize:　5,
      total : 0,
      tableData: []
    }
  },
  created(){
    this.load()
  },
  methods: {
    handleEdit(row) {
      console.log(this.form)
      this.form = JSON.parse(JSON.stringify(row))
      console.log(this.form)
      this.dialogVisible =true
    },
    //更改個數觸發
    handledelete(id)
    {
      axios.delete("http://localhost:8745/delete/"+id).then(
          res =>{
            console.log(res.data)
            if(res.data.code==='0'){
              this.$message({
                type: "success",
                message: "更新成功"
              })
            }else{
              this.$message({
                type: "error",
                message: res.data.msg
              })}
            this.load()
          })

          .catch(error =>console.log(error.data))
    },
    handleSizeChange(pageSize){
      this.pageSize = pageSize
      this.load()
    },
    //改變當前頁碼觸發
    handleCurrentChange(pageNum){
      this.currentPage=pageNum
      this.load()
    },
    currentPage(){

    },
    add(){
      this.dialogVisible = true;
      this.form={};
    },
    save(){
      if (this.form.id){
        axios.put('http://localhost:8745/user',this.form)
            .then(
                res =>{
                  console.log(res.data)
                  if(res.data.code==='0'){
                    this.$message({
                    type: "success",
                    message: "更新成功"
              })
            }else{
                    this.$message({
                      type: "error",
                      message: res.data.msg
                    })}
                  this.load()
                  this.dialogVisible=false
                })
            .catch(error =>console.log(error.data))
      }else {
            axios.post('http://localhost:8745/user',this.form)
                .then(
                    res =>{
                      console.log(res.data)
                      if(res.data.code==='0'){
                        this.$message({
                          type: "success",
                          message: "新增成功"
                        })
                      }else{
                        this.$message({
                          type: "error",
                          message: res.data.msg
                        })}
                      this.load()
                      this.dialogVisible=false
                    })
                .catch(error =>console.log(error.data))
      }
    },
    load(){
      axios.get('http://localhost:8745/page',{
        params: {
          pageNum: this.currentPage,
          pageSize: this.pageSize,
          search: this.search}
      }
      )
       .then(res => {
         console.log(res.data),
         this.tableData = res.data.data.records,
         this.total=res.data.data.total
       })
       .catch(error =>console.log(error.data))
    }
  }
}
</script>

<style>
  .formlabel .el-form-item__label{
    padding: 0px;
  }
</style>