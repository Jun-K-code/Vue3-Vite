<template>
    <section id="search_main">
        <div id="search">
            <input type="text" v-focus v-model.trim="search" v-on:input="searchResult" />
            <i class="iconfont icon-sousuo1"></i>
            <router-link to="/"><span>取消</span></router-link>
        </div>
        <div class="search_title">搜索结果</div>
        <template v-if="results.length == 0 && search != ''">
            <div class="not_find">没有相关影片</div>
        </template>
        <template v-else>
            <transition-group appear tag="ul" name="slide-in">
                <li v-for="result in results" :key="result.id">
                    <router-link :to="'/video/' + result.id">
                        <img v-lazy="baseUrl + result.img" alt="" />
                        <div class="result_name">
                            <p>{{ result.name }}</p>
                            <p>{{ result.star }}分/{{ result.time1 }}</p>
                        </div>
                    </router-link>
                </li>
            </transition-group>
        </template>
    </section>
</template>

<script setup>
import { ref } from 'vue';
import { mapState } from 'vuex';
import { search, url } from '../data/fetchData.js';
const searchVal = ref('');
const results = ref('');
const baseUrl = ref(url + '/images/');

const searchResult = () => {
    if (searchVal.value != '') {
        search(searchVal.value).then((res) => {
            results.value = res.data;
        });
    } else {
        results.value = '';
    }
};

const focusDirective = {
  mounted(el) {
    el.focus();
  }
}
const moveDirective = {
  mounted(el) {
    document.body.appendChild(el);
  },
  unmounted(el) {
    document.body.removeChild(el);
  }
}
// export default {
//     directives: {
//         focus: {
//             inserted: function (el) {
//                 // 聚焦元素
//                 el.focus();
//             },
//         },
//         move: {
//             inserted(el) {
//                 document.body.appendChild(el);
//             },
//             unbind(el) {
//                 document.body.removeChild(el);
//             },
//         },
//     },
// };
</script>

<style lang="scss" scoped>
#search_main {
    #search {
        padding: 0.2rem 0;
        background: #0fce0f;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        input {
            width: 88%;
            height: 0.6rem;
            border: none;
            border-radius: 0.3rem;
            padding-left: 0.6rem;
            line-height: 0.6rem;
        }
        span {
            color: #fff;
            margin-left: 0.1rem;
            font-size: 14px;
        }
        i {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            left: 0.25rem;
            font-size: 20px;
        }
    }
    .search_title {
        background: #f2f2f2;
        padding: 0.1rem 0;
        padding-left: 0.2rem;
        color: #333;
    }
    .not_find {
        text-align: center;
        font-size: 16px;
        margin-top: 0.1rem;
    }
    ul {
        li {
            padding: 0.12rem 0.2rem;
            & + li {
                border-top: 1px solid #eee;
            }
            a {
                font-size: 14px;
                color: #333;
                display: flex;
                align-items: center;
                img {
                    width: 0.7rem;
                    height: 1rem;
                    &[lazy='loaded'] {
                        object-fit: cover;
                    }
                    &[lazy='loading'] {
                        object-fit: contain;
                    }
                }
                div {
                    margin-left: 0.2rem;
                    p {
                        margin: 0.05rem 0;
                    }
                }
            }
        }
    }
}
</style>
