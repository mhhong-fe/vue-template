<template>
    <h3>Auto Import</h3>
    <div class="b-0 b-b-1 b-#ebebeb b-dashed mb-4 p-3">
        <div>自动导入utils</div>
        <div>应结算金额：{{ centToYuan(settlePrice) }}</div>
    </div>
    <div class="b-0 b-b-1  b-#ebebeb b-dashed mb-4  p-3">
        <div>自动导入components</div>
        <Title />
    </div>
    <div class="b-0 b-b-1  b-#ebebeb b-dashed mb-4  p-3">
        <div>自动导入enums</div>
        <div>信息流：{{ BizTypeEnum.INFO }}</div>
    </div>
</template>

<script setup lang="ts">
const settlePrice = 1211;
</script>

<style scoped>

</style>
