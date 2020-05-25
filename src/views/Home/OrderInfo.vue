<template>
    <div>
        <el-table ref="multipleTable" :data="tableData" max-height="730" border
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="orderNumber" label="订单编号"></el-table-column>
            <el-table-column prop="name" label="订单名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="state" label="订单状态" :formatter="state"></el-table-column>
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
    </div>
</template>

<script>
    export default {
        name: "OrderInfo",
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
                userId: null,
                orderState: [
                    {id: '0', name: '未发货'},
                    {id: '1', name: '待发货'},
                    {id: '2', name: '发货中'},
                    {id: '3', name: '交易成功'},
                    {id: '4', name: '退货中'},
                    {id: '5', name: '退货成功'},
                ]
            }
        },
        methods: {
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
                this.$http.userInfo().then(res => {
                    this.userId = res.data.id
                    this.$http.orderList(this.userId).then(res => {
                        console.log(res)
                        this.tableData = res
                    }).catch(err => {
                        console.log(err);
                    })
                })
            },
            formatSex: function (row) {
                return row.sex === 0 ? '男' : row.sex === 1 ? '女' : '保密'
            },
            formatRole: function (row) {
                return row.role === 0 ? '客户' : row.role === 1 ? '管理员' : '未知'
            },
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            state(row) {
                console.log(row)
                for (let i = 0; i < this.orderState.length; i ++) {
                    if (row.state === this.orderState[i].id) {
                        return this.orderState[i].name
                    }
                }
            }
        },
        created() {
            this.getOrderList()
        }
    }
</script>

<style scoped>

</style>
