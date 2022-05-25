import React, {Component} from "react";
import './AddItem.css';

class AddItem extends Component{
    state = {
        name: '',
        age: '',
    }

    handelChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.name !== '' && this.state.age !== ''){
            this.props.handelAddItem(this.state)
        }
        this.setState({
            name: '',
            age: ''
        })
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type='text' value={this.state.name} id="name" placeholder="Add name..." onChange={this.handelChange}/>
                    <input type='number' value={this.state.age} id="age" placeholder="Add age..." onChange={this.handelChange}/>
                    <input type='submit' value='Add Toda' />
                </form>
            </div>
        )
    }
}

export default AddItem;