import React, {useState} from 'react';
import Register from "./components/authentication/Register";
import "./Authentication.css"
import PseudoLogin from "./components/authentication/PseudoLogin";

const Authentication = (props) => {
    const [auth, setAuth] = useState("login")
    const [alert, setAlert] = useState({iShow: false, status: "", message: ""})

    const switchHandler = () => {
        if(auth === "login"){
            setAuth("register")
        } else{
            setAuth("login")
        }
    }
    return (
        <div className="auth-container">
            <div className="auth-body">
                {auth === "login" ? <PseudoLogin setCustomerName={props.setCustomerName} setAlert={setAlert} signIn={props.signIn} setSignIn={props.setSignIn} /> : <Register setAlert={setAlert}/>}
                <div style={{display: "flex", justifyContent: "space-around", marginTop: "10%"}}>
                    {alert.iShow && <div className="Alert" style={alert.status === "error" ? {backgroundColor: "red"}:{backgroundColor: "teal"}}>
                        {alert.message}
                    </div>}
                    <div style={{display: "flex", flexDirection:"column", alignItems:"center", gap:"5px"}}>
                        {auth === "login" ? "Don't have an account?" : "Already have an account?"}
                        <button onClick={switchHandler}>{auth === "login" ? "Register" : "Login"}</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Authentication;
