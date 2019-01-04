import React, {Component} from 'react';
import Bottom from '../../containers/link'
import MainHeader from '../../containers/mainHeader/mainheader'

class Home extends Component {
    constructor(props){
        super(props);
        this.state={
            match:{
                url:'dynamic'
            }
        }
    }
    render() {
        return (
            <div>
                <MainHeader match={this.state.match}/>
                <Bottom/>
            </div>
        );
    }
}

export default Home;