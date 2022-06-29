import React, {useState} from 'react';
import './Budget.css'
import BudgetBalance from "./components/budget/BudgetBalance";
import BudgetBody from "./components/budget/BudgetBody";



const Budget = (props) => {
    const [balance, setBalance] = useState(5000000)
    let [budgetHistory, setBudgetHistory] = useState([])
    const [selectOpt, setSelectOpt] = useState("NGN")
    let [budget, setBudget] = useState([])


    return (
        <>

            <div className="budget-container">
                <BudgetBalance setSelectOpt={setSelectOpt}  budgetHistory={budgetHistory} setBudgetHistory={setBudgetHistory} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance} setSignIn={props.setSignIn} signIn={props.signIn}/>
                <BudgetBody selectOpt={selectOpt} budget={budget} setBudget={setBudget} budgetHistory={budgetHistory} setBudgetHistory={setBudgetHistory} balance={balance} setBalance={setBalance}/>
            </div>


        </>
    );
};

export default Budget;
