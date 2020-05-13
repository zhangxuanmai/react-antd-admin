import React, { Component } from 'react'
import { observer, inject } from "mobx-react";

@inject("store")
@observer
class Box extends Component {
  render() {
    return (
      <div>
        {this.props.store.message}
      </div>
    )
  }
}

export default Box
