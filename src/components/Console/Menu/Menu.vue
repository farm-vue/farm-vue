<template>
    <el-row>
        <el-col :span="12">
            <el-menu :default-active="this.$route.path" router class="el-menu-vertical-demo" background-color="#545c64"
                     text-color="#fff" active-text-color="#ffd04b">
                <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                    <i :class="item.icon"></i>
                    <span slot="title"> {{ item.navItem }}</span>
                </el-menu-item>
            </el-menu>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: "Menu",
        data() {
            return {
                navList: [
                    {name: '/user', navItem: '用户管理', icon: "el-icon-user-solid"},
                    {name: '/category', navItem: '产品类别', icon: "el-icon-document"},
                    {name: '/project', navItem: '产品信息', icon: "el-icon-document"},
                    {name: '/order', navItem: '订单管理', icon: "el-icon-s-order"},
                    {name: '/test', navItem: '测试', icon: "el-icon-s-order"},
                ]
            }
        }
    }
</script>

<style scoped>
    .el-col {
        width: 100%;
        height: 100%;
    }

    .el-row {
        height: 100%;
    }

    .el-menu {
        border-right-width: 0;

    }

    .el-menu-item span, .el-submenu span {
        padding-right: 50px;
    }
</style>
