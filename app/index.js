import React from 'react';
import {render} from 'react-dom';
import './assets/index.less'
import App from './containers/index';
import {Provider} from 'react-redux';
import {configureStore} from './store/store.js';
let store = configureStore({}); // 生成store
// app 选择显示哪个页面
render(
    <Provider store={store}>
    <App/>
    </Provider>
    ,document.getElementById('root'));