<template>
    <el-container direction="vertical">
        <el-table ref="multipleTable" :data="tableData" :header-row-style="headerHeight" max-height="730" border
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="username" label="账号"></el-table-column>
            <el-table-column prop="nickname" label="昵称"></el-table-column>
            <el-table-column prop="sex" label="性别" :formatter="formatSex"></el-table-column>
            <el-table-column prop="role" label="角色" :formatter="formatRole"></el-table-column>
            <el-table-column prop="phone" label="电话"></el-table-column>
            <el-table-column prop="email" label="邮箱"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
                <template slot-scope="scope">
                    <el-button size="mini">查看</el-button>
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
                this.$http.userList().then(res => {
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
