'use client'

import { ChangeEvent, MouseEvent, useEffect, useState } from "react";
import Message from "./Message";

type CounterProps = {
    initialValue: number
}

function Counter(props: CounterProps){

    const [counter, setCounter] = useState(props.initialValue);
    
    // const arr = useState(props.initialValue);
    // const counter = arr[0];
    // const setCounter = arr[1];

    useEffect(() => {
        console.log("Counter: useEffect on counter update", counter);
    }, [counter])

    function inc(evt: MouseEvent<HTMLButtonElement> ){
        console.log("in inc", evt);
        //setCounter(counter + 1);
        //setCounter(counter + 1);
        setCounter(prevCounter => prevCounter + 1);
       // setCounter(prevCounter => prevCounter + 1);
        //console.log("counter", counter);
    }

    function handleChange(evt: ChangeEvent<HTMLInputElement>){

        const value = evt.target.value;
        setCounter(Number(value));
    }



    return (
        <div style={{border: "2px solid blue", margin: "5px", padding: "5px"}}>
            <h4>Counter: {counter}</h4>

            <div>
                <button onClick={inc}>Inc</button>&nbsp;
                <button onClick={() => setCounter(counter - 1)}>Decr</button>
            </div>

            <div>
                Count: <input placeholder="Counter" value={counter} onChange={handleChange}/>
            </div>

            {counter > 10 ? <Message text={"" + counter}  color="green"/> : null }

           

        </div>
    )
}

export default Counter;