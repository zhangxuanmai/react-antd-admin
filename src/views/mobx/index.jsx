import React, { Component } from 'react'
import { Provider } from 'mobx-react';
import { configure } from "mobx";
import store from './store';
import Box from './box';
import Wrapper from '../../components/WrapperSection';

class MobxDemo extends Component {
  render() {
    return (
      <Wrapper>
        <Provider store={store}>
          <h2>Mobx Example:</h2>
          <Box></Box>
        </Provider>
      </Wrapper>
    )
  }
}

//5.x版本严格模式开启方式
configure({
  enforceActions: "observed"
});

export default MobxDemo
