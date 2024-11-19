'use client';

import { useEffect } from "react";

type MessageProps = {
    text: string,
    color?: string
}

function Message(props: MessageProps){
  
    
    useEffect(() => {

        console.log("Message Component: use effect on component mount");

    }, [])

    const myjsx = (
        <p>Hello</p>
    );

    return (
        <div style={{border: '2px solid blue', margin: "4px", padding: "5px"}}>
            <h4 style={{color: props.color}}>Message: {props.text}</h4>
            <p>This is a function component</p>
            <p>Welcome to Next.js</p>
            <p>This is generated from an expression: {5 + 7}</p>
            {myjsx}

        </div>
    )
}

export default Message;

