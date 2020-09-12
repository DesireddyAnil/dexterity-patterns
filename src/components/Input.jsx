import React, { useState } from 'react';
import generate from '../generatePatterns';

function Input(props){
    const [args, setArgs] = useState({n: "4", r: "4"});

    function handleClick(){
        props.addPatterns([]);
        props.addArgs(args.n, args.r);
        props.addPatterns(generate(args.n, args.r));
    }

    function handleChange(event){
        const {name, value} = event.target;
        
        setArgs(prevValue => {
            return{...prevValue, [name]: value}
        })

    }

    return(
        <div>
            <form onSubmit={event=>event.preventDefault()}>
                <input type='text' name='n' onChange={handleChange} placeholder='n' value={args.n} />
                <input type='text' name='r' onChange={handleChange} placeholder='r' value={args.r} />
                <button type='submit' onClick={handleClick}>submit</button>

            </form>
        </div>
    );
}


export default Input;