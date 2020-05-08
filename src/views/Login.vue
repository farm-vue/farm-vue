<template>
    <el-container>
        <el-main>
            <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="用户名">
                    <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                    <el-input v-model="form.password" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="userLogin(form.username, form.password)">登录</el-button>
                </el-form-item>
            </el-form>
        </el-main>
    </el-container>
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
            userLogin(username, password) {
                this.$http.login(username, password)
                    .then(res => {
                        if (res.code == 200) {
                            this.$message({
                                message: res.data,
                                type: "success"
                            });
                            //设置Vuex登录标志为true，默认userLogin为false
                            this.$store.dispatch("userLogin", true);
                            //Vuex在用户刷新的时候userLogin会回到默认值false，所以我们需要用到HTML5储存
                            //我们设置一个名为Flag，值为isLogin的字段，作用是如果Flag有值且为isLogin的时候，证明用户已经登录了。
                            localStorage.setItem("Flag", "isLogin");
                            this.$router.push('/')
                        } else {
                            this.$message({
                                message: res.data,
                                type: "error"
                            })
                        }
                    })
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
