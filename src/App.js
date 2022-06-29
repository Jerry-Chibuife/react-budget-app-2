import './App.css'
import Authentication from "./Authentication";
import {useState} from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Budget from "./Budget";
import {Provider} from "react-redux";
import store from "./redux/store"


const FakeApp = () => {
    const [signIn, setSignIn] = useState(false)

    return(
        <Provider store={store}>
        <div className="app-container">

            <Router>
                <Switch>
                    <Route exact path="/">
                        <Authentication signIn={signIn} setSignIn={setSignIn}/>
                    </Route>
                    <Route path="/dashboard/:identity" >
                        <Budget signIn={signIn} setSignIn={setSignIn}/>
                    </Route>
                </Switch>
            </Router>

        </div>
        </Provider>
    );
}

export default FakeApp;
