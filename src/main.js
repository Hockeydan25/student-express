import { createApp } from 'vue'
import App from './App.vue'  //like reusing code...
import StudentService from '@/services/StudentService' //imports from folder and file location

let app = createApp(App) //creates APP

app.config.globalProperties.$student_api = StudentService //main link/map to app.vue mthods.

app.mount('#app')
