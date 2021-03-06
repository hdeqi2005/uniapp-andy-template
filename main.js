import Vue from 'vue'
import App from './App'

import * as Api from './utils/api.js'
import * as Common from './utils/common.js'
import * as Db from './utils/db.js'
import * as Config from './config/config.js'

import store from './store'
 import './common/uni-H5Api'
// 全局导入头部控件
import cuCustom from './colorui/components/cu-custom.vue'
Vue.component('cu-custom',cuCustom)

Vue.config.productionTip = false
Vue.prototype.$api = Api;
Vue.prototype.$common = Common;
Vue.prototype.$db = Db;
Vue.prototype.$config = Config;
Vue.prototype.$store = store;

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()

