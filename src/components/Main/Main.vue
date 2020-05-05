<template>
    <el-container direction="vertical">
        <el-header style="height: 40px">
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/user'}">用户中心</el-breadcrumb-item>
            </el-breadcrumb>
        </el-header>
        <el-container style="padding: 10px">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </el-container>
    </el-container>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                tableData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row);
            },

        },
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
