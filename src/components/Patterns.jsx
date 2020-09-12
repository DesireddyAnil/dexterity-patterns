import React from 'react';
import Pattern from './Pattern';


function Patterns(props){
    function createPattern(pattern, index){
        return(
            <Pattern 
                key={index} 
                id={index} 
                pattern={pattern} 
                deletePattern={props.deletePattern}
            />
        );
    }
    
    return(
        <div className="pattern-area">
            {props.patterns.map(createPattern)}
        </div>
    );
}

export default Patterns;