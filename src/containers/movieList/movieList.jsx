import React, {Component} from 'react';
import Navlogo from "../../components/navLogo/navlogo";
import {NavLink }from 'react-router-dom'
import {connect} from 'react-redux'
import {getHotMovie,getComingMovie} from "../../redux/actions";
import HotMovie from '../../containers/hotmovie/hotmovie'
import {Route} from "react-router-dom";
import comingMovie from '../../containers/comingMovie/comingMovie'

class MovieList extends Component {
    constructor(props){
        super(props);
        this.state={
            moviedata:[],
            comingmovie:[]
        }
    }
    playhotmovie=()=>{
         var moviedata=this.props.Search;
         this.setState({moviedata})
    }
    playcoming =()=>{
        this.props.getComingMovie();
        var moviedata=this.props.Coming;
        this.setState({moviedata})
    }
    componentDidMount() {
        this.props.getHotMovie();
        this.props.getComingMovie();
    }


    render() {
        const {moviedata}=this.state;
        return (
            <div>
               <Navlogo/>
                <div className="box">
                    <div className='picmovie'></div>
                    <p>今日可播放影片已更新<br/></p>
                        <p className="all">全部</p>
                </div>
                <div className="listcontent">
                    <NavLink className='hot' to='/bookmovie/movielist/hot' activeClassName='click' onClick={this.playhotmovie} >影院热映</NavLink>
                    <NavLink className='play' to='/bookmovie/movielist/play' activeClassName='click' onClick={this.playcoming}>即将上映</NavLink>
                    <NavLink className='all' to='/bookmovie/movielist/all'>全部</NavLink>
                </div>
                <div className="movie">
                    <Route path='/bookmovie/movielist/hot' component={HotMovie}></Route>
                    <Route path='/bookmovie/movielist/play' component={comingMovie}></Route>
                </div>
            </div>
        );
    }
}


export default connect((state)=>({Search:state.Search.moviedata,Coming:state.Coming.comingmoviedata}),{getHotMovie,getComingMovie})(MovieList);