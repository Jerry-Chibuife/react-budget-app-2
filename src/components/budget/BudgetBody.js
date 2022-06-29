import React, {useState} from 'react';
import './BudgetBody.css'
import BudgetDetails from './BudgetDetails';
import BudgetEntry from './BudgetEntry';
import {useParams} from 'react-router-dom'


const BudgetBody = (props) => {
    let {balance, setBalance, budget, setBudget, selectOpt, budgetHistory, setBudgetHistory} = props
    let { identity } = useParams()
    const [container, setContainer] = useState([])

    const greeting = () => {
        if(new Date().getHours() > -1 && new Date().getHours() < 12){
            return "Good morning, "
        }
        else if(new Date().getHours() > 11 && new Date().getHours() < 17){
            return "Good afternoon, "
        }
        else if(new Date().getHours() > 16 && new Date().getHours() < 24){
            return "Good evening, "
        }
    }

    return (
        <div className="budget-body">
            <div className="text-intro">
                <h1>{greeting()}{identity}. Welcome to your personal budget</h1>
                <p>Enter the price, description, and give a special name to your expenditure</p>
            </div>
            <div className="budget-body-sectioned">
                <BudgetEntry setBudgetHistory={setBudgetHistory} container={container} setContainer={setContainer} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance} />
                <BudgetDetails budgetHistory={budgetHistory} container={container} setContainer={setContainer} selectOpt={selectOpt} budget={budget} setBudget={setBudget} balance={balance} setBalance={setBalance}/>
            </div>
        </div>
    );
};

export default BudgetBody;
