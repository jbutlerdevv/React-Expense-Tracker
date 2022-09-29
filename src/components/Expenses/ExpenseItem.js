import React, { useState } from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
    //useState wants a default state value. It creates a special kind of variable, a variable where changes will lead to the component to be called again. In turn we can assign a special value to the variable.
    //The initial value is the first argument inside of useState - Once set the "special" variable is created. It gives us access to the special variable.
    //useState returns the "special" variable and a function. The function we can call to assign a new value to the "special" variable
    //In the end, useState returns an array with the above variable and function. The first value is the variable (value of the variable) itself and the second value is the updating function
    //IMPORTANT - useState ALWAYS returns an array with EXACTLY 2 elements (the variable or current state value (1st element) & the function to update that current state value (2nd element))

    //below is array destructuring
    //In the below, the first element in the array is the pointer to the managed value (the default state value (argument in useState)). The second element in the array is a function ("updating function" above mentioned) which we can call to set a new title
    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle("Updated!");
        console.log(title);
    };

    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date} />
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
};

export default ExpenseItem;
