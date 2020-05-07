<template>
    <div class="con">
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
    </div>
</template>

<script>
    import Header from '@/components/Console/Header/Header.vue'
    import Menu from '@/components/Console/Menu/Menu.vue'
    import Main from '@/components/Console/Main/Main.vue'

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
    .con {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        height: 100vh;
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
    }

    .el-main {
        color: #333;
        text-align: center;
        line-height: inherit;
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    html, body {
        height: 100%;
    }
</style>
