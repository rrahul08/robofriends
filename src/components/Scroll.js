import React from "react";

const Scroll = (props) => {
    return (<div style={{overflowY:'scroll', border:'0px solid white',height:'800px'}}>
        {props.children}
        </div>
    );
    };

export default Scroll;