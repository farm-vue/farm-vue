<template>
    <div class="el-container">
        <div class="login">
            <p>欢迎登录</p>
            <el-form ref="form" :model="form" label-width="80px" class="form">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="login">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                form: {
                    username: '',
                    password: '',
                }
            }
        },
        methods: {
            login() {
                this.$store.dispatch('login', this.form)
                    .then(res => {
                        if (res.code === 200) {
                            this.$message({
                                type: "success",
                                message: "登录成功!"
                            });
                            this.$router.push('/home')
                        } else {
                            this.$message({
                                message: res.data,
                                type: "error"
                            })
                        }
                    })
                    .catch(() => {
                    })
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
