import React from 'react';
import ItemStyle from './Item.css';

class Item extends React.Component{
    constructor(){
        super();
        this.state = {
            class: 'initial',
        }
    }

    doneClick = () => {
        this.setState({
            class: 'done'
        });
    }
    deleteClick = () => {
        this.props.DeleteItem(this.props.Index);
    }
    render(){

        return(
            <div className='whole-item'>
                <div className='item-div' className={this.state.class} style={ItemStyle}>
                    {this.props.value}
                </div>
                <button onClick={this.doneClick} className='done-button'>✔</button>
                <button onClick={this.deleteClick} className='delete-button'>✘</button>
            </div>
        );
    }
}

export default Item;