// https://fontawesome.com/
import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons/faSync';


// 注册全局 图标组件
Vue.component('font-icon', FontAwesomeIcon);



// 图标组件 配置（按需引入）
library.add(
    faSync,
);
