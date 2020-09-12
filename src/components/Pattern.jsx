import React, { useState } from 'react';


function Pattern(props){
    const[isClicked, setIsClicked] = useState(false);

    

    function handleClick(){
        setIsClicked(!isClicked);
    }

    let myStyle = {
        textDecoration: isClicked? "line-through": null,

    }
    

    return(
        <div className="pattern">
            <input type="checkbox" name="checkbox" onClick={handleClick}/>
            <label for="checkbox" style={myStyle}>{"    "+props.pattern}</label>

        </div>
        
    );
}

export default Pattern;