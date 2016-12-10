import React, {
  Component
} from 'react';

class Name extends Component {
  
  render() {
    return (
      <div>
        <h1>Your Name: </h1>
        <input type="text" onChange={this.props.onChange}/>
      </div>
    )
  }
}

export default Name;
