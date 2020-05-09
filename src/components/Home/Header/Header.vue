<template>
    <div>
        <div class="left">
            <span>农产品营销系统</span>
            <el-link :underline="false" href="/home">首页</el-link>
            <el-link :underline="false" href="/userInfo">个人中心</el-link>
        </div>
        <div class="right">
            <el-link v-if="!$store.state.isLogin" :underline="false" href="/login">登录</el-link>
            <el-link v-if="!$store.state.isLogin" :underline="false" href="/register">注册</el-link>
            <div style="float: right; margin: 10px 10px 0 10px"><el-avatar v-if="$store.state.isLogin">{{ user }}</el-avatar></div>
            <el-link v-if="$store.state.isAdmin" :underline="false" href="/console">后台管理</el-link>
            <el-link v-if="$store.state.isLogin" :underline="false" @click="logouttt">注销</el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                user: localStorage.isLogin
            }

        },
        methods: {
          logouttt() {
            this.$store.dispatch('logout', localStorage.token)
            .then(() => {
                this.$message({
                    type: "success",
                    message: "退出成功!"
                });
              this.$router.push('/home')
            })
            .catch(() => {
            })

          }
        }
    }
</script>

<style scoped>
    .left{
        float: left;
        padding-left: 250px;
    }

    .right {
        float: right;
        padding-right: 200px;
    }

    .el-link {
        margin-left: 10px;
    }
</style>
