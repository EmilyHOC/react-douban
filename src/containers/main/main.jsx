import React, {Component} from 'react';
import Header from "../header/header";
import Mine from "../mine/mine";
import BookMovie from "../bookmovie/bookmovie";
import {Route,Switch} from "react-router-dom";
import NotFound from '../../components/NotFound/not-found';
import NavFooter from '../../components/nav-footer/nav-footer';

class Main extends Component {
    navList=[
        {
            path:'/',
            component:Header,
            title:'首页',
            icon:'header',
            text:'首页'
        },{
            path:'/bookmovie',
            component:BookMovie,
            title:'书影音',
            text:'书影音',
            icon:'bookmovie'

        },{
            path:'/mine',
            component:Mine,
            title:'我的',
            icon:'mine',
            text:'我的'
        }
    ];
    render() {
        const currentNav=this.props.location.pathname;
        return (
            <div>

                <Switch>
                    <Route component={BookMovie} path='/bookmovie'></Route>
                    <Route component={Mine} path='/mine'></Route>
                  <Route component={Header} path='/' ></Route>
                </Switch>
                {
                    currentNav?<NavFooter navList={this.navList}/>:null
                }
            </div>
        );
    }
}

export default Main;