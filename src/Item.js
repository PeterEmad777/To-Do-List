import React from 'react';
import ItemStyle from './Item.css';

class Item extends React.Component{
    render(){

        return(
            <div className='item-div' style={ItemStyle}>
                {this.props.value}
            </div>
        );
    }
}

export default Item;