import React, {Component} from 'react';
import './index.css'
import { Link } from 'react-router-dom'
import header from "../../common/image/header.gif";
import moviebook from "../../common/image/bookmovie.gif";
import mine from "../../common/image/mine.png";
class Bottom extends Component {
    render() {
        return (
            <div className="link-box">
                <Link to="/" className="box1"><img src={header} alt="首页"className="headimg"></img></Link>
                <Link to="/bookmovie" className="box2" ><img src={moviebook}alt="书影音"/></Link>
                <Link to="/mine" className="box3"><img  alt="我的" src={mine}/></Link>
            </div>
        );
    }
}

export default Bottom;