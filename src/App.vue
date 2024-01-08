<script setup>
import { ref, watch, onMounted, watchEffect } from 'vue';
import { useRoute } from 'vue-router';

import vfooter from './components/common/vfooter.vue';

const transitionName = ref('slide-left');
const isShow = ref(true);
const isReady = ref(false);
const route = useRoute();

onMounted(() => {
    console.log('测试111', route.value);
    if (route.value.name === 'video') {
        isShow.value = false;
    }
    setTimeout(() => {
        isReady.value = true;
    }, 0);
});

watchEffect(() => {
    // 使用 watchEffect 监听路由变化
    console.log('测试222', route.value);
    if (route.value && route.value.name === 'video') {
        isShow.value = false;
    } else {
        isShow.value = true;
    }
});

watch(route, (to, from) => {
    if (to.name === 'video') {
        isShow.value = false;
    } else {
        isShow.value = true;
    }
    if (to.meta.index > from.meta.index) {
        transitionName.value = 'slide-left';
    } else {
        transitionName.value = 'slide-right';
    }
});
</script>

<template>
    <div id="video">
        <transition :name="transitionName">
            <keep-alive :include="['Home']">
                <router-view class="child-view" :class="[isReady ? 'transition' : '']">
                </router-view>
            </keep-alive>
        </transition>
        <vfooter v-if="isShow" />
    </div>
</template>

<style scoped>
@import './style/reset.scss';
.child-view {
    position: absolute;
    width: 7.5rem;
    transform: translateX(-50%);
    left: 50%;
}
.child-view.transition {
    transition: all 0.4s;
}
.slide-left-enter,
.slide-right-leave-active {
    opacity: 0;
    -webkit-transform: translate(100%, 0);
    transform: translate(100%, 0);
}
.slide-left-leave-active,
.slide-right-enter {
    opacity: 0;
    -webkit-transform: translate(-100%, 0);
    transform: translate(-100%, 0);
}
</style>
