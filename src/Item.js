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
        console.log(this.state.class);
    }
    deleteClick = () => {
        console.log(this.key);
        //this.props.DeleteItem(this.props.key);
    }
    render(){

        return(
            <div className='whole-item'>
                <div className='item-div' className={this.state.class} style={ItemStyle}>
                    {this.props.value}
                </div>
                <button onClick={this.doneClick} className='done-button'></button>
                <button onClick={this.deleteClick} className='delete-button'></button>
            </div>
        );
    }
}

export default Item;