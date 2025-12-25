import React, { Component } from "react";

class LifecycleDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("LifecycleDemo updated");

    if (prevState.count !== this.state.count) {
      console.log(
        `Count changed from ${prevState.count} to ${this.state.count}`
      );
    }
  }

  componentWillUnmount() {
    console.log("LifecycleDemo is about to unmount");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    const { count } = this.state;

    return (
      
      <>
      <div className="min-h-screen flex items-center justify-center  bg-gray-100">
      <div className="bg-white p-3 rounded-2xl shadow-lg w-100 text-center ">
        <h2 className="text-4xl font-bold mb-4">Lifecycle Demo</h2>
        <h2 className="text-4xl font-bold text-gray-800 mb-6">{count}</h2>

        <div className="flex gap-4">
          <button
            onClick={this.decrement}
            className="flex-1 py-3 bg-red-500 text-white font-semibold rounded-xl
                       hover:bg-red-600 active:scale-95 transition"
          >
            Decrement
          </button>

          <button
            onClick={this.increment}
            className="flex-1 py-3 bg-green-500 text-white font-semibold rounded-xl
                       hover:bg-green-600 active:scale-95 transition"
          >
            Increment
          </button>
        </div>
      </div>
    </div>
      </>
    );
  }
}

export default LifecycleDemo;
