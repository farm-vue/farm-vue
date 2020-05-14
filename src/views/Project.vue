<template>
    <el-container direction="vertical">
        <div class="grid-content bg-purple-light el-page-header__left" style="padding: 10px 0">
            <el-input v-model="input" placeholder="请输入内容" style="width: 200px; margin-left: 10px;"></el-input>
            <el-button icon="el-icon-search">搜索</el-button>
            <el-button type="primary" icon="el-icon-plus" @click="dialog = true">新增</el-button>
        </div>
        <el-table ref="multipleTable" :data="tableData" max-height="730" border
                  @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="50"></el-table-column>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="产品名称"></el-table-column>
            <el-table-column prop="productionDate" label="生成日期"></el-table-column>
            <el-table-column prop="expirationDate" label="有效日期"></el-table-column>
            <el-table-column prop="numbers" label="数量"></el-table-column>
            <el-table-column prop="price" label="价格"></el-table-column>
            <el-table-column prop="unit" label="单位" :formatter="formatterUnit"></el-table-column>
            <el-table-column prop="category" label="类别" :formatter="formatterCategory"></el-table-column>
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
                    <el-form-item label="产品名称" :label-width="formLabelWidth">
                        <el-input v-model="form.name" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="生产日期" :label-width="formLabelWidth">
                        <el-date-picker v-model="form.productionDate" value-format="yyyy-MM-dd" type="date"
                                        placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="有效期" :label-width="formLabelWidth">
                        <el-date-picker v-model="form.expirationDate" value-format="yyyy-MM-dd" type="date"
                                        placeholder="选择日期"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="数量" :label-width="formLabelWidth">
                        <el-input v-model="form.numbers" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="价格" :label-width="formLabelWidth">
                        <el-input v-model="form.price" autocomplete="off"></el-input>
                    </el-form-item>
                    <el-form-item label="单位" :label-width="formLabelWidth">
                        <el-select v-model="form.unit" placeholder="请选择单位" style="width: 250px">
                            <el-option v-for="(item, index) in unitList" :key="index" :label="item.name"
                                       :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="类别" :label-width="formLabelWidth">
                        <el-select v-model="form.category" placeholder="请选择类别" style="width: 250px">
                            <el-option v-for="item in category" :key="item.id" :label="item.name"
                                       :value="item.id"></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
                <div class="demo-drawer__footer">
                    <el-button @click="cancelForm">取 消</el-button>
                    <el-button type="primary" @click="createProduct(form)" :loading="loading">{{ loading ? '提交中...' : '确定' }}
                    </el-button>
                </div>
            </div>
        </el-drawer>
    </el-container>
</template>

<script>
    export default {
        name: "Project",
        data() {
            return {
                input: '',
                tableData: [],
                multipleSelection: [],
                currentPage1: 5,
                page: {
                    limit: 10,
                    p: undefined,
                    total: 10
                },
                dialog: false,
                loading: false,
                form: {
                    name: '',
                    numbers: '',
                    productionDate: '',
                    expirationDate: '',
                    price: '',
                    unit: '',
                    category: '',
                },
                unitList: [
                    {id: '0', name: '两'},
                    {id: '1', name: '斤'},
                    {id: '2', name: '公斤'},
                    {id: '3', name: '克'},
                    {id: '4', name: '千克'},
                    {id: '5', name: '吨'},
                ],
                formLabelWidth: '80px',
                timer: null,
                category: [],
            }
        },
        methods: {
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },

            // 编辑产品信息
            handleEdit(index, row) {
                this.dialog = true
                this.form = row
            },

            // 删除产品信息操作
            handleDelete(index, row) {
                console.log(index, row.id);
                this.$http.productDel(row.id).then(() => {
                        this.tableData.splice(index, 1);
                        this.$message({
                            type: "success",
                            message: "删除成功!"
                        });
                    }
                )
            },

            // 获取产品信息
            getProductList() {
                this.$http.productList().then(res => {
                    this.tableData = res
                }).catch(err => {
                    console.log(err);
                })
            },

            getCategoryList() {
                this.$http.categoryList().then(res => {
                    this.category = res
                }).catch(err => {
                    console.log(err);
                })
            },

            createProduct(form) {
                console.log(form)
                this.$http.productAdd(form).then(res => {
                    console.log(res)
                }).catch(error => {
                    console.log(error)
                })
                this.$refs.drawer.closeDrawer()
                this.getProductList()
            },

            cancelForm() {
                this.loading = false;
                this.dialog = false;
                clearTimeout(this.timer);
                this.form = []
            },

            // 分页
            handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            },

            formatterCategory(row) {
                return row.category === 1 ? '蔬菜' : row.category === 2 ? '水果' : row.category === 3 ? '肉食品' : '未知'
            },

            formatterUnit(row) {
                for (let i = 0; i < this.unitList.length; i++) {
                    if (row.unit === this.unitList[i].id) {
                        return this.unitList[i].name
                    }
                }
            }
        },
        created() {
            this.getProductList();
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
