<template>
    <div>
        <el-carousel :interval="4000" type="card" height="400px">
            <el-carousel-item v-for="item in bannerImg" :key="item">
                <img v-bind:src="item.url" class="bannerImg" width="100%" height="100%">
            </el-carousel-item>
        </el-carousel>
        <div >
            <el-row>
                <el-col :span="8" v-for="(o, index) in 2" :key="o" :offset="index > 0 ? 2 : 0">
                    <el-card :body-style="{ padding: '0px' }">
                        <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                             class="image">
                        <div style="padding: 14px;">
                            <span>好吃的汉堡</span>
                            <div class="bottom clearfix">
                                <time class="time">{{ currentDate }}</time>
                                <el-button type="text" class="button">操作按钮</el-button>
                            </div>
                        </div>
                    </el-card>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data() {
            return {
                bannerImg: [
                    {url: require("../../../assets/main/chelizi.jpg")},
                    {url: require("../../../assets/main/caomei.jpg")},
                    {url: require('../../../assets/main/niurou.jpg')},
                    {url: require('../../../assets/main/huotui.jpg')},
                    {url: require('../../../assets/main/samllbaicai.jpg')},
                    {url: require('../../../assets/main/potato.jpg')},
                ],
                currentDate: new Date()
            };
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
</style>
