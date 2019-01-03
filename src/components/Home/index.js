import React, {Component} from 'react';
import Bottom from '../../containers/link'
import MainHeader from '../../containers/mainHeader/mainheader'

class Home extends Component {
    render() {
        return (
            <div>
                <MainHeader/>
                <Bottom/>
            </div>
        );
    }
}

export default Home;