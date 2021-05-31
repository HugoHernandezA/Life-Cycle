import React from 'react';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {show: true};
  }
  delHeader = () => {
    this.setState({show: false});
  }
  render() {
    let myheader;
    if (this.state.show) {
      myheader = <Child />;
    };
    return (
      <div>
      {myheader}
      <button type="button" onClick={this.delHeader}>Delete Me</button>
      </div>
    );
  }
}

class Child extends React.Component {
  componentWillUnmount() {
    alert("This message will be unmounted, will you do it?");
  }
  render() {
    return (
      <h2>This little thing can be deleted, do you dare to?</h2>
    );
  }
}

export default Container;