<template>
    <div class="page-container">
        <div>test comments</div>
        <app-button>Test slot</app-button>
        <div @click="onGoDemo">Go Demo</div>
    </div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style scoped>
.page-container {
    padding-top: 30px;
}
</style>
