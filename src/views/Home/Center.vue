<template>
    <el-container>
        <el-aside width="200px">
            <el-menu default-active="2" class="el-menu-vertical-demo" router>
                <el-menu-item index="/userInfo">
                    <i class="el-icon-user-solid"></i>
                    <span slot="title">个人信息</span>
                </el-menu-item>
                <el-menu-item index="/orderInfo">
                    <i class="el-icon-s-goods"></i>
                    <span slot="title">订单信息</span>
                </el-menu-item>
            </el-menu>
        </el-aside>
        <el-main>
            <UserInfo v-if="$route.path === '/userInfo'"/>
            <OrderInfo v-if="$route.path === '/orderInfo'"/>
        </el-main>
    </el-container>
</template>

<script>
    import UserInfo from "./UserInfo";
    import OrderInfo from "./OrderInfo";

    export default {
        name: "Center",
        components: {
            UserInfo,
            OrderInfo,
        }
    }
</script>

<style scoped>
    .el-aside {
        background-color: #D3DCE6;
        color: #333;
        text-align: center;
        /*line-height: 200px;*/
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
    }

    body > .el-container {
        margin-bottom: 40px;
    }
</style>
