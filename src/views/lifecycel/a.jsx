import React, { Component } from 'react'

export default class A extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('2-getDerivedStateFromProps')
    return null
  }  

  constructor(props) {
    super(props)
    this.state = {}
    console.log('2-constructor')
  }

  componentDidMount() {
    console.log('2-componentDidMount')
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('2-getSnapshotBeforeUpdate')
    return null
  }

  shouldComponentUpdate() {
    console.log('2-shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('2-componentDidUpdate')
  }
  
  componentWillUnmount() {
    console.log('2-componentWillUnmount')
  }

  render() {
    console.log('2-render')
    return (
      <div>
        conponent-A <span>count: {this.props.count}</span>
      </div>
    )
  }
}
