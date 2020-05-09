<template>
    <el-container>
        <el-main>
            <el-header style="background-color: white ">欢迎注册</el-header>
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
        </el-main>
    </el-container>
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
    .el-container {
        height: 960px;
        background-image: url("../assets/beij.jpg");
        background-size: 100%;
    }

    .el-main {
        height: 100%;
    }

    .el-form {
    }
</style>
