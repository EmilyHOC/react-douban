import React, {Component} from 'react';
import SearchLogo from '../../assets/image/search.png';
import Scan from '../../assets/image/scan.png'

class SearchContent extends Component {
    search=()=>{
        console.log(this.refs.content.value)
    }

    render() {
        return (
            <div className='searchContainer'>
                <img src={SearchLogo} className='logo' onClick={this.search}/>
                <input type='text' className='search' placeholder='电影剧照CosPlay' ref='content'/>
                <img src={Scan} className='scan'></img>
            </div>

        );
    }
}

export default SearchContent;