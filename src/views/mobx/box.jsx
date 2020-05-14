import React, { Component } from 'react'
import { observer, inject } from "mobx-react";
import { Button, Space } from 'antd';

@inject("store")
@observer
class Box extends Component {
  render() {
    return (
      <div>
        
        <p>
          count:{this.props.store.message}
        </p>
        <Space>
          <Button onClick={() => this.props.store.add()}>加100</Button>
          <Button onClick={() => this.props.store.sub()}>减100</Button>
        </Space>
      </div>
    )
  }
}

export default Box
