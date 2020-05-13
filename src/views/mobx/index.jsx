import React, { Component } from 'react'
import Box from './box';
import { Provider } from 'mobx-react';
import store from './store';

class MobxDemo extends Component {
  render() {
    return (
      <Provider {...store}>
        <Box></Box>
      </Provider>
    )
  }
}

export default MobxDemo
