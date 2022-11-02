import React, { Component } from 'react'

class CC extends Component {
  constructor() {
    super()
    this.state = { total: 0, name: '' }
    console.log('constructor')
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.setState({ total: 2 })
  }
  componentDidUpdate(prevProps, prevState) {
    // 可以得到最後改變的state值
    console.log('componentDidUpadte', ' total=', this.state.total)

    if (prevState.total === 5) {
      this.setState({ name: 'eddy' })
    }
  }

  render() {
    console.log('render')
    return (
      <>
        <h1>類別型元件</h1>
        <h1
          onClick={() => {
            this.setState({ total: this.state.total + 1 })
          }}
        >
          {this.state.total}
        </h1>
      </>
    )
  }
}

export default CC
