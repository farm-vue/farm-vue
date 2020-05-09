<template>
    <el-container>
        <el-header>
            <Header></Header>
        </el-header>
        <el-main>
            <router-view/>
        </el-main>
    </el-container>
</template>

<script>
    import Header from "@/components/Home/Header/Header.vue";

    export default {
        name: "index",
        components: {
            Header,
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
