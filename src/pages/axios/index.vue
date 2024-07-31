<template>
    <div>
        <el-button type="primary" @click="handleClick">
            axios请求
        </el-button>
    </div>
</template>

<script setup lang="ts">
function handleClick() {
    request(API_GET_BIND_CHANNEL_LIST_V2({
        ruleId: 1,
    }));
}
</script>

<style scoped>

</style>
