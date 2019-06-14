import React from 'react';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import AppReducer from '../reducers/AppReducer'
import {history} from "../helpers/history";
import WhiteBoard from "./WhiteBoard";
import {Router,Route,Switch} from 'react-router-dom'
const App = () => {
    const store = createStore(AppReducer)
    return(
        <Provider store={store}>
            <Router history={history}>
                <Switch>
                    <WhiteBoard/>
                </Switch>
            </Router>
        </Provider>

    );
}
export default App;