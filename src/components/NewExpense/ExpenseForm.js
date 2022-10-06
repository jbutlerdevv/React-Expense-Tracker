import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    // ---SETTING individual states---
    const [enteredTitle, setEnteredTitle] = useState("");
    const [enteredAmount, setEnteredAmount] = useState("");
    const [enteredDate, setEnteredDate] = useState("");

    // Combining multiple states together
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: "",
    //     enteredAmount: "",
    //     enteredDate: "",
    // });

    const titleChangeHandler = (e) => {
        // ---SETTING individual states---
        setEnteredTitle(e.target.value);

        // Combining multiple states together
        // Below is incorrect, it will work but it may cause an incorrect state snapshot when relying on prevState
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: e.target.value,
        // });
        // We should call it like the below
        // Using this approach, React guarantees that the state snapshot it gives you using "prevState", will always be the latest state snapshot, keeping all scheduled updates in mind
        // !!!!Use this approach if your state update depends on the previous state!!!!
        // setUserInput((prevState) => {
        //     return {
        //         ...prevState,
        //         enteredTitle: e.target.value,
        //     };
        // });
    };

    const amountChangeHandler = (e) => {
        // ---SETTING individual states---
        setEnteredAmount(e.target.value);

        // Combining multiple states together
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: e.target.value,
        // });
    };

    const dateChangeHandler = (e) => {
        // ---SETTING individual states---
        setEnteredDate(e.target.value);

        // Combining multiple states together
        // setUserInput({
        //     ...userInput,
        //     enteredDate: e.target.value,
        // });
    };

    const submitHandler = (e) => {
        // prevents page reloading when request sent on form submission
        e.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={enteredTitle}
                        onChange={titleChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input
                        value={enteredAmount}
                        type='number'
                        min='0.01'
                        step='0.01'
                        onChange={amountChangeHandler}
                    />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                        value={enteredDate}
                        type='date'
                        min='2019-01-01'
                        max='2022-12-31'
                        onChange={dateChangeHandler}
                    />
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
