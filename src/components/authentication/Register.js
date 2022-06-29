import React, {useState} from 'react';


const Register = (props) => {
    let setAlert = props.setAlert

    const [userDetails, setUserDetails] = useState({username: "", email:"", password: "", budgetHistory: []})

    const handleUserInput = (e) => {
        setUserDetails({...userDetails, [e.target.name]: e.target.value})
    }

    const handleRegistration = () => {

        let {username, email} = userDetails

        let isFieldIncomplete = Object.keys(userDetails).some((detail)=> detail === " ")

        if(isFieldIncomplete){
            console.log("Field Incomplete")
            setAlert({iShow: true, status: "error", message: "Field Incomplete"})
            return
        }

        let validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

        let isEmailCorrect = email.match(validRegex)

        if(!isEmailCorrect){
            console.log("Email Incorrect")
            setAlert({iShow: true, status: "error", message: "Email Incorrect"})
            return
        }

        try {
            let usersRepository
            usersRepository = JSON.parse(localStorage.getItem("users"))
            let isUserExist = usersRepository.some((user) => user.username === username)
            if (isUserExist) {
                console.log("Username Already Exists")
                setAlert({iShow: true, status: "error", message: "Username Exists"})
                return
            }

            let newUsersRepository = [userDetails, ...usersRepository]
            localStorage.setItem("users", JSON.stringify(newUsersRepository))
            setAlert({iShow: true, status: "success", message: "Registration Successful"})
        }

        catch (error) {
            localStorage.setItem("users", JSON.stringify([userDetails]))
            setAlert({iShow: true, status: "success", message: "Registration Successful"})
        }

    }

    return (
        <div className="auth-register" style={{display: "flex", flexDirection: "column"}}>
            <label>Username</label>
            <input name="username" onChange={handleUserInput}/>
            <label>Email</label>
            <input name="email" onChange={handleUserInput}/>
            <label>Password</label>
            <input type="password" name="password" onChange={handleUserInput}/>
            <button onClick={handleRegistration}>Register</button>
        </div>
    );
};

export default Register;
