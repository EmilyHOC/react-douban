import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./redux/store";
import Main from './containers/main/main';
import './assets/css/index.less'


ReactDOM.render((
    <Provider store={store}>
            <HashRouter>
                <Switch>
                    <Route component={Main} ></Route>
                </Switch>
            </HashRouter>
    </Provider>
), document.getElementById('root'));

