<template>
    <div id="app">
        <!-- <el-container>
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
        </el-container> -->
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
        <router-view></router-view>
    </div>
</template>

<script>
    // import Header from '@/components/Header/Header.vue'
    // import Menu from '@/components/Menu/Menu.vue'
    // import Main from '@/components/Main/Main.vue'

    export default {
        name: "BackHome"
        // components: {
        //     Header,
        //     Menu,
        //     Main
        // },
    }
</script>
