<template>
    <div>
        <div class="caret-wrapper" style="margin: 0 auto">
            <el-table ref="multipleTable" style="width: 960px; margin: 0 auto" :data="tableData" border>
                <el-table-column type="selection" width="50"></el-table-column>
                <el-table-column prop="produceName" label="商品名称"></el-table-column>
                <el-table-column prop="producePrice" label="单价"></el-table-column>
                <el-table-column label="数量">
                    <template slot-scope="scope">
                        <el-input-number v-model="scope.row.numbers" @change="handleChange(scope.row)" :min="1"
                                         :max="10"></el-input-number>
                    </template>
                </el-table-column>
                <el-table-column :formatter="totalPrice" label="总价"></el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                        </el-button>
                    </template>
                </el-table-column>
            </el-table>
        </div>
        <div>
            <el-button>结算</el-button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ShoppingCart",
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
            getShoppingCartList() {
                this.$http.shoppingCartList(localStorage.userId).then(res => {
                    // console.log(res)
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
            handleChange(data) {
                this.$http.shoppingCartPatch(data.id, {
                    numbers: data.numbers
                }).then(res => {
                    console.log(res)
                })
            },
            totalPrice(row) {
                return row.numbers * row.producePrice
            }
        },
        created() {
            this.getShoppingCartList()
        }
    }
</script>

<style scoped>

</style>
