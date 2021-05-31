import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {favoritecolor: "red"};
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({favoritecolor: "yellow"})
    }, 1500)
  }
  componentDidUpdate() {
    document.getElementById("mydiv").innerHTML =
    "But now my updated favorite color is " + this.state.favoritecolor;
  }
  render() {
    return (
      <React.Fragment>
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
        <div id="mydiv"></div>
    </React.Fragment>
    );
  }
}
export default Header;