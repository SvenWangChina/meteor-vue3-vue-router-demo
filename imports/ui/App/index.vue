<template>
    <div class="app">
        <router-view></router-view>
    </div>
</template>

<script lang="ts">
import index from './index';
export default index;
</script>

<style scoped>
.app {
    position: relative;
    margin: 0 auto;
    width: 100%;
    height: 100%;
    overflow: hidden;
}

.child-view {
    position: absolute;
}

.child-view.slide-left-leave-active,
.child-view.slide-left-enter-active,
.child-view.slide-right-leave-active,
.child-view.slide-right-enter-active {
    transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

.slide-left-enter,
.slide-right-leave-active {
    opacity: 1;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
    z-index: 9999;
}

.slide-left-leave-active,
.slide-right-enter {
    opacity: 1;
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0);
}
</style>
