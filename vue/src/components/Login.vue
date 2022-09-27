<template>
    <div class="login_container">
      <div class="login_box">
        <div class="avatar_box">
          <img src="../assets/img/188331228_4547834468564304_123551034178293880_n.jpg">
        </div>
        <div class="bottom_login">
          <el-form :model="ruleForm" :rules="rules" ref="ruleForm"  >
            <el-form-item prop="uname">
              <el-input v-model="ruleForm.uname"  prefix-icon="el-icon-user-solid" placeholder="請输入帳號"></el-input>
            </el-form-item>
            <el-form-item  prop="pwd">
              <el-input v-model="ruleForm.pwd" prefix-icon="el-icon-lock" placeholder="請输入密碼"></el-input>
            </el-form-item>

              <el-form-item  prop="verifyCode"  >
                <div class="verifyCode_box">
                <el-input v-model="ruleForm.verifyCode" prefix-icon="el-icon-mobile" class="verifyCode" placeholder="請输入驗證碼"></el-input>
                  <img class="verifyCode_img" src="../assets/img/img-1505183493-31543@900.jpg">

                </div>
              </el-form-item>


            <el-form-item class="buttoon">
              <el-button type="primary" @click="submitForm('ruleForm')">登陸</el-button>
              <el-button @click="resetForm('ruleForm')">重置</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      ruleForm: {
        uname: '',
        pwd: '',
        verifyCode: ''
      },
      rules: {
        uname: [
          { required: true, message: '請输入帳號', trigger: 'blur' },
          { min: 3, max: 15, message: '長度在3到15個之間', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '請输入密碼', trigger: 'blur' },
          { min: 3, max: 15, message: '長度在3到15個之間', trigger: 'blur' }
        ],
        verifyCode: [
          { required: true, message: '請输入驗證碼', trigger: 'blur' },
          { min: 3, max: 15, message: '長度在3到15個之間', trigger: 'blur' }
        ]
      }
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$router.push("/index");
          alert('登陸成功!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

<style lang="less" scoped>

.login_container{
  height: 100%;
  background-image: url("../assets/img/ss.jpg" );
  text-align: center;
  background-size: cover;
  background-position: center center;
}
.login_box {
  width: 450px;
  height: 380px;
  background-color: #66b1ff;
  border-radius: 3px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  .avatar_box {
    width: 130px;
    height: 130px;
    border-radius: 50%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: -65px auto;

    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background-color: #EEEEEE;
    }

  }

  .bottom_login {
    position: absolute;
    width: 100%;
    bottom: 0px;
    padding: 0px 20px;
    box-sizing: border-box;

    .verifyCode_box {
      display: flex;
      .verifyCode {
        width: 70%;
        justify-content: left;
      }

      .verifyCode_img {
        height: 40px;
        width: 30%;
        justify-content: flex-end;
      }
    }

    .buttoon {
      display: flex;
      justify-content: flex-end;
    }
  }
}
</style>