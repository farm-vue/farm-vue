<template>
    <el-container>
        <el-header><Header></Header></el-header>
        <el-main><Main/></el-main>
    </el-container>
</template>

<script>
    import Header from "@/components/Home/Header/Header.vue";
    import Main from "@/components/Home/Main/Main.vue";
    export default {
        name: "index",
        components: {
            Header,
            Main
        }
    }
</script>

<style scoped>
    .el-header {
        background-color: white;
        color: #333;
        text-align: center;
        line-height: 60px;
    }

    .el-main {
        background-color: #E9EEF3;
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
