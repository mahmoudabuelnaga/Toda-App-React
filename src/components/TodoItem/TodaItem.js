import React from "react";
import './TodaItem.css'

const TodaItem = (props) => {
    const {items, handledelete} = props;
    console.log(items)
    const ListItems = items.length !== 0? (items.map((item) => {
        return(
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={() => handledelete(item.id)}>&times;</span>
            </div>
        )
    })): (<p>List is Empty</p>)
    return(
        <div className="ListItems">
            <div>
                <span className="name title">Name</span>
                <span className="age title">Age</span>
                <span className="action title">Action</span>
            </div>

            {ListItems}
        </div>
    )
}

export default TodaItem;