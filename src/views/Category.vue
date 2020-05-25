<template>
    <el-container direction="vertical">
        <el-row>
            <el-col :span="7">
                <div class="grid-content bg-purple-light">
                    <el-input v-model="input" placeholder="请输入内容" style="width: 200px; margin-left: 10px;"></el-input>
                    <el-button icon="el-icon-search">搜索</el-button>
                    <el-button type="primary" icon="el-icon-plus" @click="dialog = true">新增</el-button>
                </div>
            </el-col>
        </el-row>
        <el-table ref="multipleTable" :data="tableData" max-height="730" border>
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="账号"></el-table-column>
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
        <el-drawer :visible.sync="dialog" direction="rtl" custom-class="demo-drawer" ref="drawer" @close="form=[]">
            <div class="demo-drawer__content">
                <el-form :model="form">
                    <el-form-item label="类别名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                </el-form>
                <div class="demo-drawer__footer">
                    <el-button type="primary" @click="createEditCategory(form)">确认</el-button>
                </div>
            </div>
        </el-drawer>
    </el-container>
</template>

<script>
    export default {
        name: "Category",
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
                dialog: false,
                form: {
                    name: '',
                },
                formLabelWidth: '80px',
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            handleEdit(index, row) {
                this.form = row
                this.dialog = true
            },

            handleDelete(index, row) {
                this.$http.categoryDel(row.id).then(res => {
                        console.log(res)
                        this.tableData.splice(index, 1);
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                    }
                )
            },

            getCategoryList() {
                this.$http.categoryList().then(res => {
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

            createEditCategory(form) {
                if (form.id == null) {
                    this.$http.categoryAdd(form).then(res => {
                        console.log(res)
                        this.$refs.drawer.closeDrawer()
                        this.tableData.push(res)
                    })
                } else {
                    this.$http.categoryPut(form.id, form).then(res => {
                        console.log(res)
                        this.$refs.drawer.closeDrawer()
                    })
                }

            }
        },
        created() {
            this.getCategoryList()
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
