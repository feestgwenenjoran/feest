import { createApp } from "vue"
import "./style.css"
import App from "./App.vue"
import { createHead } from "@vueuse/head"
const head = createHead()

createApp(App).use(head).mount("#app")
