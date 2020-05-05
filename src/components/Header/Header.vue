<template>
    <el-col>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
                 background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <el-menu-item>后台管理系统</el-menu-item>
            <!--            <el-menu-item index="1">处理中心</el-menu-item>-->
            <!--            <el-menu-item index="3" disabled>消息中心</el-menu-item>-->
        </el-menu>
    </el-col>
</template>

<script>
    export default {
        name: "Header",
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1'
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    }
</script>

<style scoped>

</style>
