<template>
    <div class="w-100vw h-100vh">
        <h2>Vue Template</h2>
        <RouterView />
        <el-button @click="jump">
            应用内跳转
        </el-button>
    </div>
</template>

<script setup lang="ts">
const router = useRouter();
function jump() {
    router.push('/settle');
}
</script>
