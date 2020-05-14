<template>
    <div class="content-wrapper">
        <div>
            <el-button v-if="!isUserInfo" type="primary" icon="el-icon-edit" @click.stop="handleEditStreet">编辑</el-button>
            <el-button v-else-if="isUserInfo" type="primary" icon="el-icon-setting" @click.stop="handleSaveStreet">保存</el-button>
        </div>
        <div class="user_info">
            <el-form ref="form" :model="form" label-width="100px">
                <el-form-item label="用户名：">
                    <span v-if="!isUserInfo" @click.stop="handleButtonClick(index)">{{form.username}}</span>
                    <el-input v-else-if="isUserInfo" v-model="form.username">
                    </el-input>
                </el-form-item>
                <el-form-item label="昵称：">
                    <span v-if="!isUserInfo">{{form.nickname}}</span>
                    <el-input v-else-if="isUserInfo" v-model="form.nickname"></el-input>
                </el-form-item>
                <el-form-item label="性别：">
                    <span v-if="!isUserInfo">{{form.sex === '0' ? '男' : form.sex === '1' ? '女' : '保密'}}</span>
                    <el-select v-else-if="isUserInfo" v-model="form.sex" placeholder="性别">
                        <el-option label="男" value="0"></el-option>
                        <el-option label="女" value="1"></el-option>
                        <el-option label="保密" value="2"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="电话：">
                    <span v-if="!isUserInfo">{{form.phone}}</span>
                    <el-input v-else-if="isUserInfo" v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="邮箱：">
                    <span v-if="!isUserInfo">{{form.email}}</span>
                    <el-input v-else-if="isUserInfo" v-model="form.email"></el-input>
                </el-form-item>
                <el-form-item label="地址：">
                    <span v-if="!isUserInfo">{{form.address}}</span>
                    <el-input v-else-if="isUserInfo" v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        name: "UserInfo",
        data() {
            return {
                activeButton: 0,
                dialogTitle: '添加街道', // 控制弹出框title的变量
                dialogVisible: false, // 弹出框显示隐藏的控制变量
                isAddStreet: true, // true表示是添加街道数据，false表示添加的是社区工作站的数据
                streetNameOrCommunityName: '', // 添加的时候用于保存街道的名称获取社区工作站的名称
                isEditStreet: false, // 编辑街道
                isEditCommunity: false, // 编辑社区,
                isUserInfo: false,
                communityData: [],
                form: {
                    username: '',
                    nickname: '',
                    sex: '',
                    phone: '',
                    email: '',
                    address: '',
                },
            }
        },
        methods: {
            handleButtonClick(index) {
                this.activeButton = index
            },
            /**
             * flag:0表示添加街道，1表示添加社区
             */
            // handleShowDialog(flag) {
            //     this.isAddStreet = !flag
            //     this.dialogTitle = flag ? '添加社区工作站' : '添加街道'
            //     this.$nextTick(() => {
            //         this.dialogVisible = true
            //     })
            // },
            // addStreetOrCommunity() {
            //     // 校验输入的内容不能为空
            //     if (!this.streetNameOrCommunityName.length) {
            //         this.$message.error('填写的名称不能为空或者空字符串')
            //         return
            //     }
            //     // 1.校验一下当前添加的街道名称是否已经存在？？街道名称是唯一的
            //     // 2.添加成功之后，关闭弹出框，并且要重新请求数据
            //     if (this.isAddStreet) {
            //         // 调用添加街道的接口
            //         this.streetsData.push({id: 10, name: this.streetNameOrCommunityName})
            //     } else {
            //         // 调用社区工作站的接口
            //         this.communityData.push({id: 10, name: this.streetNameOrCommunityName})
            //     }
            //     // 清空streetNameOrCommunityName的数据，避免下次添加的时候显示上次的数据
            //     this.streetNameOrCommunityName = ''
            //     this.dialogVisible = false
            // },
            // handleBeforeClose(done) {
            //     this.dialogVisible = false
            //     done()
            // },
            // handleEditCommunity() {
            //     this.isEditCommunity = true
            // },
            // handleSaveCommunity() {
            //     this.isEditCommunity = false
            // },
            handleEditStreet() {
                this.isUserInfo = true
            },
            handleSaveStreet() {
                this.isUserInfo = false
            },
            // enterSystem() {
            //     this.$router.push('/dashboard')
            // },

            getUserInfo() {
               this.$http.userInfo().then(res => {
                   this.form = res.data
               })
            }
        },
        created() {
            this.getUserInfo()
        }
    }
</script>

<style scoped>
    .user_info .el-form > * {
        width: 300px;
        margin-right: 5px;
        margin-bottom: 5px;
    }
</style>
