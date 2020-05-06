<template>
    <div>
        <el-form ref="form" :model="form" label-width="80px">
            <el-form-item label="用户名">
                <el-input v-model="form.username"></el-input>
            </el-form-item>
            <el-form-item label="密码">
                <el-input v-model="form.password" type="password"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary"  @click="userLogin(form.username, form.password)">登录</el-button>
            </el-form-item>
        </el-form>
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
            userLogin(username, password) {
                this.$http.login(username, password)
                .then(res => {
                    if (res.status == 200) {
                        this.$message({
                            message: res.data,
                            type: "success"
                        })
                    } else {
                        this.$message({
                            message: res.data,
                            type: "error"
                        })
                    }
                    console.log(res.status)
                })
            }
        }
    }
</script>

<style scoped>

</style>
