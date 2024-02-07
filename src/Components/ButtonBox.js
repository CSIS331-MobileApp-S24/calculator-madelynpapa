import React from 'react';
import './ButtonBox.css';
import Button from './Button';
const ButtonBox = () => {
    const btnValues = [
        ["C", "+-", "%", "/"],
        
        ["7", "8", "9", "x"],
        
        ["4", "5", "6", "-"],
        
        ["1", "2", "3", "+"],
        
        ["0", ".", "="]

    ];


    return(
        <div className = "buttonBox">
            {btnValues.flat().map((value, index) => {
                return <Button 
                className = {value === "=" ? "equals f2 pa3 br3 bg-red" : "f3 pa3 br3 bg-purple white" }
                key = {index} 
                value = {value} 
                onClick ={() => {console.log("Button " + {value} + " clicked!");}}
                />
            })}
        </div>
    );
}

export default ButtonBox;