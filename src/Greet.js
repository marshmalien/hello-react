import React, {Component} from 'react';

class Greet extends Component {
  render() {
    return(
      <h2>Hello {this.props.name} </h2>
    )
  }
}

export default Greet;
