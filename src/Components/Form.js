import React, { useState } from 'react';

const Form = (props) => {

    const [item, setItem] = useState("");
    const [size, setSize] = useState("");


    const addItem = (e) =>{
        e.preventDefault();
        props.newItem({item, size});
        setItem("");
        setSize("");
        }
    

    return(
        <form onSubmit={addItem} action="/action_page.php">
            <h3>Enter box dimensions and color</h3>
            <div>
            <label>Color</label>
            <input type="text" 
                    name="item" 
                    onChange={e => setItem(e.target.value)} 
                    value={item} />
            </div>        
            <div>            
            <label>Size</label>
            <input type="text" 
                    name="size" 
                    onChange={e => setSize(e.target.value)} 
                    value={size} />
            </div>     
            
            <input type="submit" value="Add Box" />
        </form> 
    );
}

export default Form;