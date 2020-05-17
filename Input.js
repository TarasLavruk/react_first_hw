import React from 'react';

class Input extends React.Component  {
  constructor(props) {
    super(props)
    this.state = {
      text: 'Enter some text above',
    }
    this.showText = this.showText.bind(this);
  }
  
  showText(e) {
    this.setState({ text: e.target.value });
  }
  render() {
    return(
      <div>
        <input onInput={this.showText} />
        <h1>{this.state.text}</h1>
      </div>
    );
  }   
}

export default Input;
