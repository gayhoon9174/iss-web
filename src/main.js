import { createApp } from 'vue'
import App from './App.vue'
import store from './store/store'   //위에서 작성한 store.js를 import 해준다.
import router from './router'   //router를 import 해준다.

import './firebase'   //파이어베이스 import

createApp(App)
    .use(store) //store를 쓰겠다. 걍 단순히 앞서 만든 store.js 파일 연결하는게 다임.
    .use(router)
    .mount("#app")
