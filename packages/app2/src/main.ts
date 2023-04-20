/*
 * @Description:   
 * @Author: YangJianFei
 * @Date: 2023-04-18 09:01:19
 * @LastEditTime: 2023-04-20 14:54:40
 * @LastEditors: YangJianFei
 * @FilePath: \monorepo-demo\packages\app2\src\main.ts
 */
import { createApp } from 'vue';
import { routes } from './router';
import { createWebHashHistory, createRouter } from 'vue-router';
import './style.css';
import App from './App.vue';
import { renderWithQiankun, qiankunWindow } from 'vite-plugin-qiankun/dist/helper';

let route = null;
let instance: any = null;
let history = null;

instance = createApp(App);

const render = (props = {}) => {
    const { container } = props as any;
    history = createWebHashHistory(
        qiankunWindow.__POWERED_BY_QIANKUN__ ? '/wahaha/' : '/'
    );
    route = createRouter({
        history,
        routes
    });

    instance.use(route);
    instance.mount(container ? container.querySelector('#app') : document.getElementById('app'));

    if (qiankunWindow.__POWERED_BY_QIANKUN__) {
        console.log('我是子应用');
    }
};

renderWithQiankun({
    mount(props) {
        console.log('fly-app2 mount');
        render(props);
    },
    bootstrap() {
        console.log('bootstrap');
    },
    unmount(props) {
        console.log('fly-app2 卸载了');
        instance.unmount();
        if (instance._container) {
            instance._container.innerHTML = '';
        }
        history = null;
        route = null;
        instance = null;
    },
    update(props) {
        console.log('fly-app2 update');
    }
});

if (!qiankunWindow.__POWERED_BY_QIANKUN__) {
    render();
}

