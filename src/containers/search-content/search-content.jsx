import React, {Component} from 'react';
import SearchLogo from '../../assets/image/search.png';
import Scan from '../../assets/image/scan.png';
import {connect} from 'react-redux';
import {receiveData} from '../../redux/actions'

class SearchContent extends Component {
    state={
        search:'大黄蜂',
    }
    search=()=>{
        this.props.receiveData(this.refs.content.value)
    }

    render() {
        return (
            <div className='searchContainer'>
                <img src={SearchLogo} className='logo' onClick={this.search} alt="logo"/>
                <input type='text' className='search' placeholder={this.state.search} ref='content'/>
                <img src={Scan} className='scan' alt='scan'></img>
            </div>

        );
    }
}

export default connect(state=>({Search:state.Search}),{receiveData})(SearchContent);