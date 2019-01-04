import React, {Component} from 'react';
import './mianheader.css'
import {Route} from 'react-router-dom'
import Dynamics from '../../components/Dynamics'
import Laybel from '../../components/Laybel'

class Mainheader extends Component {
    render() {
        const {match}=this.props;
        return (
            <div className="main">
                <input className="search"/>
                <div className="route">
                    <Route path={match.url} exact component={Dynamics}>动态</Route>
                    <Route path={`${match.url}/:id`} component={Laybel}>标签</Route>
                </div>
                <div className="triangle-down"></div>
                <div className="triangle-down2"></div>
            </div>
        );
    }
}

export default Mainheader;