import React from "react";
import './SearchBox.css';

const SearchBox = ({searchfield, searchchange}) => {
    return (
        <div className='pa2'>
                <input 
                
                type='search' 
                placeholder='Search robots' 
                className='pa3 ba br-pill b--blue bg placeholder-style'
                onChange={searchchange}
            />
        </div>
    );
}

export default SearchBox;