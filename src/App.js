import './App.css';
import React, { Component } from 'react';
import TodaItem from './components/TodoItem/TodaItem';
import AddItem from './components/AddItem/AddItem';

class App extends Component {
  state = {
    items: [
      {id:1, name:'Mahmoud', age:24},
      {id:2, name:'Ahmed', age:10},
      {id:3, name:'Iyad', age:8},
      {id:4, name:'Mohamed', age:5},
      {id:5, name:'Noura', age:28},
      {id:6, name:'Moshera', age:50},
      {id:7, name:'Mohamed', age:52},
    ]
  }
  handledelete = (id) => {
    let items = this.state.items.filter(item => {
      return item.id !== id
    })
    this.setState({items})
  }

  handelAddItem = (item) => {
    item.id = Math.random()
    let items = this.state.items;
    items.push(item)
    this.setState({items})
  }
  
  render(){

    return (
      <div className='App container'>
        <h1 className='text-center'>Toda App</h1>
          Todo App
          <TodaItem items={this.state.items} handledelete={this.handledelete} />
          <AddItem handelAddItem={this.handelAddItem} />
      </div>
      );  
  }
}

export default App;
