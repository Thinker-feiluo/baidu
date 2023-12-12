import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import BaiduMap from 'vue-baidu-map-3x'


const app = createApp(App)
app.use(BaiduMap, {
    ak: '7cOH5NDDrW8LjMqwQczyDdxCsni8urMt'
})

app.mount('#app')
