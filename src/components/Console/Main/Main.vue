<template>
    <el-container direction="vertical">
        <el-header style="height: 40px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/console' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item v-if="$route.path === '/user'" :to="{ path: '/user'}">用户管理</el-breadcrumb-item>
                <el-breadcrumb-item v-if="$route.path === '/category'" :to="{ path: '/category'}">产品类别</el-breadcrumb-item>
                <el-breadcrumb-item v-if="$route.path === '/project'" :to="{ path: '/project'}">产品信息</el-breadcrumb-item>
                <el-breadcrumb-item v-if="$route.path === '/order'" :to="{ path: '/order'}">订单管理</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-container style="padding: 10px">
            <User v-if="$route.path === '/console'"/>
            <router-view></router-view>
        </el-container>
    </el-container>
</template>

<script>
    import User from "../../../views/User";
    export default {
        name: "Main",
        methods: {},
        components: {
            User
        }
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
