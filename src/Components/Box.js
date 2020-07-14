import React from 'react';
import App from '../App';

const List = (props) => {
    return(
        <ul>
            {props.box.map((listItem, i) =>
            <li key={i} className="box" style={{backgroundColor:listItem.item, width:`${listItem.size}px`, height:`${listItem.size}px`}}
            >{listItem.item}</li>
            )}
            
        </ul>
    );
}
export default List;