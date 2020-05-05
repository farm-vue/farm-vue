<template>
    <div id="app">
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <el-container>
                <el-aside width="200px">
                    <Menu/>
                </el-aside>
                <el-container>
                    <el-main>
                        <Main/>
                    </el-main>
                    <el-footer>基于Web的农产品营销系统设计与实现</el-footer>
                </el-container>
            </el-container>
        </el-container>
        <!--        <router-view v-if="!$route.meta.keepalive"></router-view>-->
        <!--        <router-view @authenticated="setAuthenticated" />-->

        <!--        <div id="nav">-->
        <!--            <router-link to="/">Home</router-link>-->
        <!--            |-->
        <!--            <router-link to="/about">About</router-link>-->
        <!--            |-->
        <!--            <router-link to="/backHome">后台管理</router-link>-->
        <!--        </div>-->
        <!--        <router-view/>-->
    </div>
</template>

<script>
    import Header from '@/components/Header/Header.vue'
    import Menu from '@/components/Menu/Menu.vue'
    import Main from '@/components/Main/Main.vue'

    export default {
        name: "BackHome",
        components: {
            Header,
            Menu,
            Main
        },
    }
</script>

<style>
    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100%;
    }

    .el-header, .el-footer {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 60px;
        width: 100%;
    }


    .el-aside {
        background-color: #545c64;
        color: #333;
        text-align: center;
        line-height: 200px;
        height: 100%;
        /*width: 80px;*/
        /*display: block;*/
        /*!*position: absolute;*!*/
        /*left: 0;*/
        /*top: 0;*/
        /*bottom: 0;*/
        /*overflow-y: scroll;*/
    }

    .el-main {
        /*background-color: #E9EEF3;*/
        color: #333;
        text-align: center;
        line-height: 160px;
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    html, body {
        height: 100%;
    }
</style>
