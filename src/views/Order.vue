<template>
    <el-container direction="vertical">
        <el-row>
            <el-col :span="7">
                <div class="grid-content bg-purple-light">
                    <el-input v-model="input" placeholder="请输入内容" style="width: 200px; margin-left: 10px;"></el-input>
                    <el-button icon="el-icon-search">搜索</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table ref="multipleTable" :data="tableData" max-height="730" border @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="orderNumber" label="订单编号"></el-table-column>
            <el-table-column prop="name" label="订单名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="state" label="订单状态"></el-table-column>
            <el-table-column prop="user" label="客户名称"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
        <div class="block">
            <span class="demonstration"></span>
            <el-pagination background @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page.sync="currentPage1" :page-size="page.limit" layout="total, prev, pager, next"
                           :total="page.total">
            </el-pagination>
        </div>
    </el-container>
</template>

<script>
    export default {
        name: "Order",
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                currentPage1: 5,
                page: {
                    limit: 10,
                    p: undefined,
                    total: 10
                },
                input: '',
            }
        },
        methods: {
            // tableRowClassName({rowIndex}) {
            //     if (rowIndex === 1) {
            //         return 'warning-row';
            //     } else if (rowIndex === 3) {
            //         return 'success-row';
            //     }
            //     return '';
            // }
            // toggleSelection(rows) {
            //     if (rows) {
            //         rows.forEach(row => {
            //             this.$refs.multipleTable.toggleRowSelection(row);
            //         });
            //     } else {
            //         this.$refs.multipleTable.clearSelection();
            //     }
            // },
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            handleEdit(index, row) {
                console.log(index, row);
            },
            handleDelete(index, row) {
                console.log(index, row.id);
                this.$http.userDel(row.id).then(res => {
                        console.log(res)
                        this.tableData.splice(index, 1);
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                    }
                )
            },
            getOrderList() {
                this.$http.orderList().then(res => {
                    console.log(res)
                    this.tableData = res
                }).catch(err => {
                    console.log(err);
                })
            },
            formatSex: function (row) {
                return row.sex == 0 ? '男' : row.sex == 1 ? '女' : '保密'
            },
            formatRole: function (row) {
                return row.role == 0 ? '客户' : row.role == 1 ? '管理员' : '未知'
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },
        created() {
            this.getOrderList()
        }
    }
</script>

<style scoped>
    .el-row {
        height: 60px;
        line-height: 60px;
    }

    .el-input {
        width: 250px;
    }
</style>
