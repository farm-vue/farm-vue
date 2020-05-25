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
        <el-table ref="multipleTable" :data="tableData" max-height="730" border
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="orderNumber" label="订单编号"></el-table-column>
            <el-table-column prop="name" label="订单名称"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column label="订单状态" >
                <template slot-scope="scope">
                    <span v-if="isOrderEdit">{{scope.row.state | match(orderState) }}</span>
                    <el-select v-else v-model="scope.row.state" placeholder="订单状态">
                        <el-option v-for="item in orderState" :key="item.id" :label="item.name" :value="item.id"></el-option>
                    </el-select>
                </template>
            </el-table-column>
            <el-table-column prop="username" label="客户名称"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button v-if="isOrderEdit" size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button v-if="isOrderEdit" size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    <el-button v-else size="mini" @click="handleSave(scope.$index, scope.row)">保存</el-button>
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
                isOrderEdit: true,
                input: '',
                orderState: [
                    {id: '0', name: '未发货'},
                    {id: '1', name: '待发货'},
                    {id: '2', name: '发货中'},
                    {id: '3', name: '交易成功'},
                    {id: '4', name: '退货中'},
                    {id: '5', name: '退货成功'},
                ],
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            handleEdit() {
                this.isOrderEdit = false;
            },

            handleSave(index, row) {
                console.log(index, row);
                this.$http.orderPatch(row.id, {
                    state: row.state
                }).then(res => {
                    console.log(res)
                    this.$message({
                        type: 'success',
                        message: '修改成功'
                    })
                })
                this.isOrderEdit = true
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

            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },

            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },
            state(row) {
                console.log(row)
                for (let i = 0; i < this.orderState.length; i++) {
                    if (row.state === this.orderState[i].id) {
                        return this.orderState[i].name
                    }
                }
            }
        },
        created() {
            this.getOrderList()
        },
        filters: {
            match: (res, orderState) => {
                for (let i = 0; i < orderState.length; i++) {
                    if (res === orderState[i].id) {
                        return orderState[i].name
                    }
                }
            }
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
