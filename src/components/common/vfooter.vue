<script setup>
import { ref } from 'vue';

const msg = ref('');
</script>

<template>
    <section class="footer">
        <router-link to="/">
            <i class="iconfont icon-dianying"></i>
            <span>主页</span>
        </router-link>
        <router-link to="/me">
            <i class="iconfont icon-my1"></i>
            <span>我</span>
        </router-link>
    </section>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.footer {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 7.5rem;
    display: flex;
    justify-content: center;
    background: #fff;
    z-index: 9999;
    border-top: 1px solid #a09898;
    a {
        flex: 1;
        justify-content: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0.05rem 0;
        &:active {
            background: rgba(0, 0, 0, 0.1);
        }
        span {
            color: #333;
        }
    }
    .icon-dianying,
    .icon-my1 {
        font-size: 28px;
        color: #333;
    }
    .router-link-exact-active i,
    .router-link-exact-active span {
        color: #4ebf60 !important;
    }
}
</style>
