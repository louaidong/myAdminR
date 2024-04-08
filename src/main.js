import { createApp } from "vue";
import { setupRouter } from "@/router";
import App from "./App.vue";

async function bootstrap() {
  const app = createApp(App);
  console.log("我是你爸爸");
  // Configure routing
  // 配置路由
  setupRouter(app);

  
  app.mount('#app');
}

bootstrap();
