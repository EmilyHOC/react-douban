import React, {Component} from 'react';
import Navlogo from "../../components/navLogo/navlogo";
import {NavLink }from 'react-router-dom'

class MovieList extends Component {
    render() {
        return (
            <div>
               <Navlogo/>
                <div className="box">
                    <div className='picmovie'></div>
                    <p>今日可播放影片已更新<br/>
                        <p className="all">全部</p></p>
                </div>
                <div className="listcontent">
                    <NavLink className='hot' to='/bookmovie/movielist/hot' activeClassName='click'>影院热映</NavLink>
                    <NavLink className='play' to='/bookmovie/movielist/play' activeClassName='click'>即将上映</NavLink>
                    <NavLink className='all' to='/bookmovie/movielist/all'>全部</NavLink>
                </div>
                <div className="movie">
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                    <img src="" alt=""/>
                </div>
            </div>
        );
    }
}

export default MovieList;