<template>
    <div>
        <div class="left">
            <span>农产品营销系统</span>
            <el-link :underline="false" href="/">首页</el-link>
        </div>
        <div class="right">
            <el-link :underline="false" href="/login">登录</el-link>
            <el-link :underline="false" href="/register">注册</el-link>
            <el-link :underline="false" href="/console">后台管理</el-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Header"
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
