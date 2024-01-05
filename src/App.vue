<script setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router'

import HelloWorld from './components/HelloWorld.vue';
import vfooter from './components/common/vfooter.vue';

const transitionName = ref('slide-left');
const isShow = ref(true);
const isReady = ref(false);
const route = useRoute();

onMounted(() => {
  console.log("测试111", route)
    if (route.value.name === 'video') {
        isShow.value = false;
    }
    setTimeout(() => {
        isReady.value = true;
    }, 0);
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
    <!-- <HelloWorld msg="Vite + Vue" /> -->
    <div id="video">
        <transition :name="transitionName">
            <keep-alive :include="['home']">
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
