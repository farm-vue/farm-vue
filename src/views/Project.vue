<template>
    <el-container direction="vertical">
        <el-row>
            <el-col :span="12">
                <div class="grid-content bg-purple-light">
                    <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="primary" icon="el-icon-plus">新增</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table ref="multipleTable" :data="tableData" :header-row-style="headerHeight" max-height="730" border
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="产品名称"></el-table-column>
            <el-table-column prop="productionDate" label="生成日期"></el-table-column>
            <el-table-column prop="expirationDate" label="有效日期"></el-table-column>
            <el-table-column prop="numbers" label="数量"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="unit" label="单位"></el-table-column>
            <el-table-column prop="category" label="类别"></el-table-column>
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
        name: "Project",
        data() {
            return {
                tableData: [],
                multipleSelection: [],
                currentPage1: 5,
                page: {
                    limit: 10,
                    p: undefined,
                    total: 10
                }
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
            getUserList() {
                this.$http.productList().then(res => {
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
            headerHeight({rowIndex}) {
                if (rowIndex === 0) {
                    return 'height:80px'
                } else {
                    return ''
                }
            }
        },
        created() {
            this.getUserList()
        }
    }
</script>

<style scoped>

</style>
