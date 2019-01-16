import React, {Component} from 'react';
import {NavLink, Route} from "react-router-dom";
import State from "../state/state";
import Recommend from "../recommend/recommend";
import {withRouter} from "react-router-dom";
import SearchContent from "../search-content/search-content";


class Header extends Component {

    render() {
        const path=this.props.location.pathname;
        return (
            <div className='header'>
                <SearchContent/>
              <div className="tab">
                  <NavLink to='/header/state' className="state" activeClassName="stateactive">动态</NavLink>
                  <NavLink to='/header/recommend' className="router" activeClassName="routeractive">路由</NavLink>
              </div>
                <Route component={State} path='/header/state'></Route>
                <Route component={Recommend} path='/header/recommend'/>
            </div>
        );
    }
    componentDidMount() {
    }
}

export default withRouter(Header);