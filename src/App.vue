<script setup lang="ts">
function handleClick() {
    ElMessage.success('Hello World')
}
</script>

<template>
    <div class="flex w-100vw h-100vh justify-center items-center flex-col">
        <div :class="$style.header">
            Hello World
        </div>
        <div class="color-#407fff text-4 mb-30px font-500">
            Hello World
        </div>
        <el-button type="primary" @click="handleClick">
            <el-icon><Search /></el-icon>
            <span>Hello World</span>
        </el-button>
        <RouterView />
    </div>
</template>

<style module lang="scss">
.header {
    margin-bottom: 30px;
    height: 30px;
    color: #407fff;
    font-weight: 500;
}
</style>
