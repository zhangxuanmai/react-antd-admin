import React, { Component } from 'react'
import ComponentA from './a'

export default class LifeCycel extends Component {
  /* Mounting
    constructor()
    static getDerivedStateFromProps()
    render()
    componentDidMount()
  */

  /* Updating
    static getDerivedStateFromProps()
    shouldComponentUpdate()
    render()
    getSnapshotBeforeUpdate()
    componentDidUpdate()
  */

  /* Unmounting
    componentWillUnmount()
  */

  /* Error
    static getDerivedStateFromError()
    componentDidCatch()
  */

  static getDerivedStateFromProps(props, state) {
    console.log('1-getDerivedStateFromProps')
    return null
  }

  constructor(props) {
    super(props)
    this.state = {
      count: 100
    }
    console.log('1-constructor')
  }

  componentDidMount() {
    console.log('1-componentDidMount')
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('1-getSnapshotBeforeUpdate')
    return null
  }

  shouldComponentUpdate() {
    console.log('1-shouldComponentUpdate')
    return true
  }

  componentDidUpdate() {
    console.log('1-componentDidUpdate')
  }

  componentWillUnmount() {
    console.log('1-componentWillUnmount')
  }

  add = (params) => {
    console.log('add')
    const count = this.state.count + 1
    this.setState({ count })
  }

  render() {
    console.log('1-render')
    return (
      <div>
        <button onClick={this.add}>add</button>
        lifecycel
        <ComponentA count={this.state.count} />
      </div>
    )
  }
}
