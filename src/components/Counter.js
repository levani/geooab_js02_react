import React, { Component } from 'react';

let id;
class Counter extends Component {
  state = {
    counter: 0,
    test: 1,
  }

  increase() {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  decrease() {
    if (this.state.counter === 0) {
      return;
    }

    this.setState({
      counter: this.state.counter - 1
    })
  }

  componentDidMount() {
    id = setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(id);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.start !== this.props.start) {
      this.setState({
        counter: this.props.start
      });
    }
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>
        <button
          onClick={() => this.increase()}
        >
            +
        </button>
        <button
          onClick={() => this.decrease()}
        >
            _
        </button>
      </div>
    )
  }
}

export default Counter;