<template>
    <div>
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in bannerImg" :key="item.id">
                <img :src="item.url" class="bannerImg" width="100%" height="100%">
            </el-carousel-item>
        </el-carousel>
        <div class="card">
            <div v-for="(o, index) in productList" :key="index">
                <el-card :body-style="{ padding: '0px'}">
                    <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                         class="image">
                    <div style="padding: 14px;">
                        <span>{{o.name}}</span>
                        <div class="bottom clearfix">
                            <p>
                                <time class="time"> 生产日期{{ o.productionDate }}</time>
                            </p>
                            <time class="time"> 生产日期{{ o.expirationDate }}</time>
                            <p>数量：{{o.numbers}}</p>
                            <span>￥{{o.price}}</span>
                            <span style="margin: 0 0 0 10px">单位：{{o.unit|match(unitList)}}</span>
                            <el-button type="text" class="button" @click="addShoppingCart(o.id)">加入购物车</el-button>
                            <el-button type="text" class="button" @click="buyShopping(o)">购买</el-button>
                        </div>
                    </div>
                </el-card>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                bannerImg: [
                    {url: require("../../../assets/main/chelizi.jpg"), id: 1},
                    {url: require("../../../assets/main/caomei.jpg"), id: 2},
                    {url: require('../../../assets/main/niurou.jpg'), id: 3},
                    {url: require('../../../assets/main/huotui.jpg'), id: 4},
                    {url: require('../../../assets/main/samllbaicai.jpg'), id: 5},
                    {url: require('../../../assets/main/potato.jpg'), id: 6},
                ],
                productList: [],
                unitList: [
                    {id: '0', name: '两'},
                    {id: '1', name: '斤'},
                    {id: '2', name: '公斤'},
                    {id: '3', name: '克'},
                    {id: '4', name: '千克'},
                    {id: '5', name: '吨'},
                ],
            };
        },
        methods: {
            getProductList() {
                this.$http.productList().then(res => {
                    console.log(res)
                    this.productList = res
                })
            },

            addShoppingCart(produceId) {
                var data = {
                    "numbers": 1,
                    "produce": produceId,
                    "user": localStorage.userId
                }
                this.$http.shoppingCartAdd(data).then(res => {
                    this.$message({
                        type: 'success',
                        message: '加入购物车成功！'
                    })
                    console.log(res)
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '加入购物车失败！'
                    })
                })
            },

            buyShopping(data) {
                this.$http.orderAdd({
                    name: data.name,
                    price: data.numbers * data.price,
                    numbers: 1,
                    produce: data.id,
                    user: localStorage.userId,
                }).then(res => {
                    console.log(res)
                    this.$message({
                        type: "success",
                        message: '购买成功！'
                    })
                    this.$router.go(0)
                }).catch(() => {
                    this.$message({
                        type: 'error',
                        message: '购买失败！'
                    })
                })
            }
        },
        created() {
            this.getProductList()
        },
        filters: {
            match(res, unitList) {
                for (let i = 0; i < unitList.length; i++) {
                    if (res === unitList[i].id) {
                        return unitList[i].name
                    }
                }
            }
        }
    }
</script>

<style scoped>
    div {
        height: 100%;
    }

    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 200px;
        margin: 0;
    }

    .time {
        font-size: 13px;
        color: #999;
    }

    .bottom {
        margin-top: 13px;
        line-height: 12px;
    }

    .button {
        padding: 0;
        float: right;
    }

    .image {
        width: 100%;
        display: block;
    }

    .clearfix:before,
    .clearfix:after {
        display: table;
        content: "";
    }

    .clearfix:after {
        clear: both
    }

    .card {
        /*background-color: #FBFCFC ;*/
        height: 100%;
        width: 1200px;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
    }

    .card > div {
        width: 22%;
        margin-right: 2%;
        margin-bottom: 20px;
    }
</style>
