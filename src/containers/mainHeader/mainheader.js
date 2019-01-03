import React, {Component} from 'react';
import './mianheader.css'

class Mainheader extends Component {
    render() {
        return (
            <div className="main">
                <input className="search"/>
                <div className="route">
                    <a href="#">动态</a>
                    <a href="#">标签</a>
                </div>

            </div>
        );
    }
}

export default Mainheader;