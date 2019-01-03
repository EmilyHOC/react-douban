import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter,Switch,Route} from "react-router-dom";
import Home from './components/Home';
import BookMovie from './components/BookMovie'
import Mine from './components/Mine'

ReactDOM.render((
    <BrowserRouter>
       <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route path="/bookmovie" component={BookMovie}/>
           <Route path="/mine" component={Mine}/>
       </Switch>
    </BrowserRouter>
), document.getElementById('root'));

