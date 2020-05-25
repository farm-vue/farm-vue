<template>
    <el-container>
        <el-header>
            <Header/>
        </el-header>
        <el-main>
            <Main v-if="$route.path === '/home'" />
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "@/components/Home/Header/Header.vue";
    import Main from "@/components/Home/Main/Main";

    export default {
        name: "index",
        props: ['page'],
        components: {
            Header,
            Main
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: aliceblue;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        color: #333;
        text-align: center;
        /*line-height: 160px;*/
        height: 100%;
    }

    .el-container {
        height: 100%;
    }

    html, body {
        height: 100%;
    }
</style>
