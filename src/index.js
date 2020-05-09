import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import { GlobalStyled } from './assets/style/normalize'
import App from './App'
import store from './store'
import './assets/style/index.css'
import './mock'

import enUS from 'antd/es/locale/en_US';
import zhCN from 'antd/es/locale/zh_CN';
import moment from 'moment';
import 'moment/locale/zh-cn';

moment.locale('en');


ReactDOM.render(
  <Provider store={store}>
    <GlobalStyled />
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Provider>,
  document.getElementById('root')
);