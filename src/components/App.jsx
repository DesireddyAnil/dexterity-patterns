import React, { useState } from 'react';
import Patterns from './Patterns';
import Heading from './Heading';
import Input from './Input';

function App(){
    const[args, setArgs] = useState({n: "", r: ""});
    const[patterns, setPatterns] = React.useState([]);

    function addArgs(n, r){
        setArgs({n: n, r: r});
    }
    
    function deletePattern(id){
        setPatterns(prevValue => {
            return prevValue.filter((pattern, index)=>{
                return id !== index;
            });
        });
    }

    function addPatterns(patterns){
        setPatterns(patterns);
    }

    //addPatterns(generate(props.n, props.r)); 
    

    return(
    <div>
      <Heading />
      <Input addArgs={addArgs} addPatterns={addPatterns}/>
      <Patterns 
        patterns = {patterns}
        deletePattern = {deletePattern}
        n={args.n}
        r={args.r}
        
        />
    </div>
  );
}



export default App;
