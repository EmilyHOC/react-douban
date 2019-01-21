import React, {Component} from 'react';
import Logo1 from '../../assets/image/找电影.png'
import Logo2 from '../../assets/image/豆瓣榜单.png'
import Logo3 from '../../assets/image/豆瓣猜.png'
import Logo4 from '../../assets/image/豆瓣片单.png'

class Navlogo extends Component {
    render() {
        return (
            <div className='navlogo_container'>
                <div className='searchmovie'>
                    <img src={Logo1} alt='1'></img>
                    <p>找电影</p>
                </div>
                <div className='bangdan'>
                    <img src={Logo2} alt='1'></img>
                    <p>豆瓣榜单</p>
                </div>
                <div className='gruss'>
                    <img src={Logo3} alt='1'></img>
                    <p>豆瓣猜</p>
                </div>
                <div className='list'>
                    <img src={Logo4}alt='1'></img>
                    <p>豆瓣片单</p>
                </div>
            </div>
        );
    }
}

export default Navlogo;