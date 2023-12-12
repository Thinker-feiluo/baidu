import { createApp } from 'vue'
import App from './App.vue'
// 下载的百度api第三方库
import BaiduMap from 'vue-baidu-map-3x'

const app = createApp(App);

// 注册第三方库
app.use(BaiduMap, {
    ak: '7cOH5NDDrW8LjMqwQczyDdxCsni8urMt',
})
app.mount('#app')
