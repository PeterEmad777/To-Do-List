import React from 'react';
import Item from './Item';
import './App.css';

class App extends React.Component{

  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {  
      list: [],
      value: '',
      elements:[],
      i: 0
    };
  }

  onClick = (event) => {
    console.log(this.state.elements.length);
    if(this.state.value !== ''){
      this.state.list.push(this.state.value);
      this.setState({
        value: '',
      });
    }
  }
  deleteItem = (id) => {
    var newList = this.state.list.filter((item, index) => index != id);
    console.log(newList);
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value
    });
  }
  render(){ 
    for(this.state.i; this.state.i < this.state.list.length; this.state.i++){
      this.state.elements.push(
      <div className='item' key={this.state.i}>
        <Item key={this.state.i} value={this.state.list[this.state.i]} DeleteItem={this.deleteItem} />
      </div>);
    }
    return ( 
      <div className="App">
        <div className='container' style={this.style}>
          {this.state.elements}
        </div>      
        <div className='input-block'>
          <input type='text' className='text-box' onChange={this.handleChange} value={this.state.value || ''} placeholder='Enter new item'></input>
          <button className='button' onClick={this.onClick}>Add Item</button>  
        </div>
      </div>
    );
  }
}
export default App;
