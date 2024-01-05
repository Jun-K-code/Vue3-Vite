<template>
    <section v-if="lists" class="home">
        <div id="search">
            <router-link to="/search">
                <div class="search_input"><i class="iconfont icon-sousuo1"></i>搜索</div>
            </router-link>
        </div>
        <Loading :loading="loading" />
        <section class="video_list">
            <div class="video_list_header">
                <h3>
                    全部<span>({{ lists[3].length }})</span>
                </h3>
                <router-link to="/all">更多 <i class="iconfont icon-jiantouyou"></i></router-link>
            </div>
            <ul>
                <li :key="list.id" v-for="list in lists[3].slice(0, 10)">
                    <router-link :to="'/video/' + list.id">
                        <div><img v-lazy="baseUrl + list.img" alt="" /></div>
                        <h3>{{ list.name }}</h3>
                        <div>
                            <div
                                class="starList"
                                :style="{
                                    'background-position-y':
                                        -15 * (10 - list.star).toFixed(0) + 'px',
                                }"
                            ></div>
                            <span>{{ list.star }}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="video_list">
            <div class="video_list_header">
                <h3>
                    电影<span>({{ lists[0].length }})</span>
                </h3>
                <router-link to="/movie">更多 <i class="iconfont icon-jiantouyou"></i></router-link>
            </div>
            <ul>
                <li :key="list.id" v-for="list in lists[0].slice(0, 10)">
                    <router-link :to="'/video/' + list.id">
                        <div class="preImg"><img v-lazy="baseUrl + list.img" alt="" /></div>
                        <h3>{{ list.name }}</h3>
                        <div>
                            <div
                                class="starList"
                                :style="{
                                    'background-position-y':
                                        -15 * (10 - list.star).toFixed(0) + 'px',
                                }"
                            ></div>
                            <span>{{ list.star }}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="video_list">
            <div class="video_list_header">
                <h3>
                    电视剧<span>({{ lists[1].length }})</span>
                </h3>
                <router-link to="/tv">更多 <i class="iconfont icon-jiantouyou"></i></router-link>
            </div>
            <ul>
                <li :key="list.id" v-for="list in lists[1].slice(0, 10)">
                    <router-link :to="'/video/' + list.id">
                        <div class="preImg"><img v-lazy="baseUrl + list.img" alt="" /></div>
                        <h3>{{ list.name }}</h3>
                        <div>
                            <div
                                class="starList"
                                :style="{
                                    'background-position-y':
                                        -15 * (10 - list.star).toFixed(0) + 'px',
                                }"
                            ></div>
                            <span>{{ list.star }}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
        <section class="video_list">
            <div class="video_list_header">
                <h3>
                    综艺<span>({{ lists[2].length }})</span>
                </h3>
                <router-link to="/zy">更多 <i class="iconfont icon-jiantouyou"></i></router-link>
            </div>
            <ul>
                <li :key="list.id" v-for="list in lists[2].slice(0, 10)">
                    <router-link :to="'/video/' + list.id">
                        <div class="preImg"><img v-lazy="baseUrl + list.img" alt="" /></div>
                        <h3>{{ list.name }}</h3>
                        <div>
                            <div
                                class="starList"
                                :style="{
                                    'background-position-y':
                                        -15 * (10 - list.star).toFixed(0) + 'px',
                                }"
                            ></div>
                            <span>{{ list.star }}</span>
                        </div>
                    </router-link>
                </li>
            </ul>
        </section>
    </section>
</template>

<script setup>
import Loading from './common/Loading.vue';
import { url, initHome, getAvator } from '../data/fetchData';
// import { mapActions, mapState } from 'vuex';
import { useStore } from 'vuex';
import { onMounted, ref } from 'vue';

const lists = ref('');
const loading = ref(true);
const baseUrl = ref(url + '/images/');
const store = useStore();

// const initData = async () => {
//     loading.value = true;
//     try {
//         const res = await initHome();
//         const list = res.data;
//         lists.value = list;
//         store.dispatch('initVideoData', {
//             initVideoData: list,
//         });
//     } catch (e) {
//         // this.$toast({
//         //           icon: 'fail',
//         //           message: e.message,
//         //       });
//     }
//     setTimeout(() => {
//         loading.value = false;
//     }, 500);
// };

// onMounted(() => {
//     if (store.state.videoData !== null) {
//         lists.value = store.state.videoData;
//     } else {
//         initData();
//     }
// });

// export { lists, loading, baseUrl, Loading };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import 'src/style/home';
</style>
