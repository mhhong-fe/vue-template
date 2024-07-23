<template>
    <div>
        <el-button type="primary" @click="handleClick">
            axios
        </el-button>
    </div>
</template>

<script setup lang="ts">
function handleClick() {
    const res = request(API_GET_BIND_CHANNEL_LIST_V2({
        ruleId: 1,
    }));
    console.log({ res });
}
</script>

<style scoped>

</style>
