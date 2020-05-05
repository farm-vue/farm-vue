<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-container>
            <el-aside width="200px"><Menu/></el-aside>
            <el-container>
                <el-main><Main/></el-main>
                <el-footer>Footer</el-footer>
            </el-container>
        </el-container>
    </el-container>
</template>

<script>
    import Header from '@/components/Header/header.vue'
    import Menu from '@/components/Menu/menu.vue'
    import Main from '@/components/Main/Main.vue'
    export default {
        name: "BackHome",
        components: {
            Header,
            Menu,
            Main
        }
    }
</script>

<style scoped>
    .el-header, .el-footer {
        background-color: #B3C0D1;
        color: #333;
        /*text-align: center;*/
        line-height: 60px;
    }

    .el-aside {
        background-color: #545c64;
        color: #333;
        /*text-align: center;*/
        /*line-height: 200px;*/
        /*height: 100%;*/
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        line-height: 160px;
    }

    body > .el-container {
        margin-bottom: 10px;
    }

</style>
