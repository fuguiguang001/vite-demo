import { createApp, toRaw } from 'vue';
import App from './App.vue';
import router from './router';
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import type { PiniaPluginContext } from 'pinia';
import { createPinia } from 'pinia';

type Options = {
  key?: string;
};

const PiniaKey: string = 'wy';

// 设置存储值
const setStorage = (key: string, value: any): void => {
  localStorage.setItem(key, JSON.stringify(value));
};
// 获取存储值
const getStorage = (key: string) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {};
};

const piniaPlugin = (options: Options) => {
  // 利用函数柯里化实现用户可自定义配置前缀
  return (context: PiniaPluginContext) => {
    const { store } = context;
    const data = getStorage(`${options?.key ?? PiniaKey}-${store.$id}`);
    store.$subscribe(() => {
      setStorage(`${options?.key ?? PiniaKey}-${store.$id}`, toRaw(store.$state));
    });
    // 返回每个实例的内容
    return { ...data };
  };
};

const store = createPinia();

// 注册自定义插件
store.use(piniaPlugin({}));

const app = createApp(App);

app.use(router);
app.use(store);
app.use(ElementPlus);

app.mount('#app');
