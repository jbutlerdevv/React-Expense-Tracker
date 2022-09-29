import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpenseDetails.css";
import { expensesArr } from "../../App";
import Card from "../UI/Card";

const ExpenseDetails = () => {
    const expensesData = expensesArr.map((expense, i) => (
        <ExpenseItem
            key={i}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
        />
    ));

    return <Card className='expenses'>{expensesData}</Card>;

    // COURSE SOLUTION
    // return (
    //     <Card className='expenses'>
    //         <ExpenseItem
    //             title={props.items[0].title}
    //             amount={props.items[0].amount}
    //             date={props.items[0].date}
    //         />
    //         <ExpenseItem
    //             title={props.items[1].title}
    //             amount={props.items[1].amount}
    //             date={props.items[1].date}
    //         />
    //         <ExpenseItem
    //             title={props.items[2].title}
    //             amount={props.items[2].amount}
    //             date={props.items[2].date}
    //         />
    //         <ExpenseItem
    //             title={props.items[3].title}
    //             amount={props.items[3].amount}
    //             date={props.items[3].date}
    //         />
    //     </Card>
    // );
    // END COURSE SOLUTION
};

export default ExpenseDetails;
