import React, {Component} from 'react';
import {SearchBar} from "antd-mobile";
import {NavLink,Route} from "react-router-dom";
import MovieList from '../movieList/movieList'
import Tv from '../tv/tv';
import Art from '../art/art'
import Read from '../Read/read';
import Music from '../music/music';
import City from "../city/city";



class Bookmovie extends Component {
    render() {
        return (
            <div>
                <SearchBar placeholder='用一部电影来形容你的2018'/>
                <div className="nav">
                    <NavLink to='/bookmovie/movielist' activeClassName='click' exact>电影</NavLink>
                    <NavLink to='/bookmovie/tv' activeClassName='click' exact>电视</NavLink>
                    <NavLink to='/bookmovie/art' activeClassName='click' exact>综艺</NavLink>
                    <NavLink to='/bookmovie/read' activeClassName='click' exact>读书</NavLink>
                    <NavLink to='/bookmovie/music' activeClassName='click' exact>音乐</NavLink>
                    <NavLink to='/bookmovie/city' activeClassName='click' exact>同城</NavLink>
                </div>
                <Route component={MovieList} path='/bookmovie/movielist' />
                <Route path='/bookmovie/tv' component={Tv}/>
                <Route path='/bookmovie/art' component={Art}/>
                <Route path='/bookmovie/read' component={Read}/>
                <Route path='/bookmovie/music' component={Music}/>
                <Route path='/bookmovie/city' component={City}/>
            </div>
        );
    }
}

export default Bookmovie;