import React, { Component } from 'react';
import './color_adder.css';

class ColorAdder extends Component {
  constructor(props){
    super(props);
    this.handleSubmit = this.submit.bind(this);
  }
  submit(e){
    e.preventDefault();
    const title = this.refs._title;
    const color = this.refs._color;

    alert(
      `title: ${title.value},\ncolor: ${color.value}
      `
    )
    title.value ='';
    color.value = '#000'
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p>
          <label>
            color title:
            <input ref="_title" type="text" placeholder= "color title ..."/>
          </label>
        </p>
        <p>
          <label>
            color:
            <input ref ="_color" type="color" required/>
          </label>
        </p>
        
        <button> add </button>
        
      </form>
    );
  }
}

export default ColorAdder;
