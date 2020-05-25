<template>
    <div class="el-container">
        <div class="login">
            <p>欢迎注册</p>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="userRegister(form.username, form.password)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            userRegister(username, password) {
                console.log(username, password)
                this.$http.register(username, password).then(res => {
                        console.log(res)
                        if (res.code === 200) {
                            this.$message({
                                message: res.data,
                                type: 'success'
                            })
                            this.$router.push('/login')
                        } else {
                            this.$message({
                                message: res.data,
                                type: 'error'
                            })
                        }
                    }
                )
            }
        }
    }
</script>

<style scoped>
    html, body {
        height: 100%;
        padding: 0;
        margin: 0;
    }

    .el-container {
        height: 100%;
        background: url("../assets/beij.jpg") no-repeat;
        background-size: cover;
    }

    .login {
        padding: 250px 0 548px;
        margin: 0 auto;
    }

    p {
        text-align: center;
    }

    .form {
        width: 300px;
    }
</style>
