import React, {useState} from 'react';
import './BudgetBody.css'
import { toDateTimeLocal } from '../../util'
import {useDispatch, useSelector} from "react-redux";
import {deleteBudgetAction} from "../../redux/actions/budget";


const BudgetDetails = (props) => {
    let {budget, setBudget, selectOpt, container} = props
    const [input, setInput] = useState("")

    const {budgetState} = useSelector((state)=>state.budgetReducer)
    const dispatch = useDispatch()


    const handleInput = (e) =>{
        setInput(e.target.value)
    }

    const filterTable = () =>{
        let newObject = [...budget]
        setBudget(newObject.filter((data)=>data["budgetDescription"].match(input) || data["budgetName"].match(input)))
    }

    const Delete = (objectID, budgetAmount) => {
        dispatch(deleteBudgetAction({id:objectID, budgetAmount:budgetAmount}))
    }

    const showAll = () => {
        setBudget(container)
    }

    return (
        <div className="budget-details-container">
            <div className="budget-details-header">
                <div className="header-text">
                    <h1 onClick={showAll}>Details</h1>
                </div>
                <div className="search-bar">
                    <label>Search For: </label>
                    <input onChange={handleInput} />
                    <button onClick={filterTable} >Search</button>
                </div>
            </div>
            {budgetState.length > 0 ?
                <table>
                    <tr className="table-header">
                        <th>Date</th>
                        <th>Budget Name</th>
                        <th>Amount</th>
                        <th>Description</th>
                        <th> </th>
                    </tr>
                    {budgetState.map((data, index) =>
                        <tr key={index} className="data-row">
                            <td>{toDateTimeLocal(data.date)}</td>
                            <td>{data.budgetName}</td>
                            <td>{selectOpt} { data.budgetAmount}</td>
                            <td>{data.budgetDescription}</td>
                            <td>
                                <button style={{backgroundColor: "red", color:"white", padding: "2px 10px", border: "unset"}} onClick={()=> Delete(index, +data.budgetAmount)} >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    )}
                </table>
                :
                "Empty"
            }
        </div>
    );
};



export default BudgetDetails;
