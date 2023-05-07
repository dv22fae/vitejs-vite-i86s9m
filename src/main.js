import { createApp } from "vue"
import "vuestic-ui/css"
import './style.css';
import App from "./App.vue" 
import { createVuestic } from "vuestic-ui"
var app = createApp(App)
app.use(createVuestic())
app.mount('#app')
