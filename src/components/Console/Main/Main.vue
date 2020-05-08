<template>
    <el-container direction="vertical">
        <el-header style="height: 40px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/console' }">首页</el-breadcrumb-item>
<!--                <el-breadcrumb-item :to="{ path: '/user'}">用户中心</el-breadcrumb-item>-->
            </el-breadcrumb>
        </el-header>
        <el-container style="padding: 10px">
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Main",
        methods: {},
    }
</script>

<style scoped>
    .el-breadcrumb {
        height: 30px;
        line-height: 40px;
    }

    .el-header {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-container {
        border: whitesmoke 1px solid;
        height: 100%;
    }
</style>
