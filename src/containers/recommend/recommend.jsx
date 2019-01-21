import React, {Component} from 'react';
import logo from "../../assets/image/logo.png";
import thumb from "../../assets/image/thumb.png";
import Line from "../../components/line/line"
import commend from '../../assets/image/commend.png'
import send from '../../assets/image/sendto.png'


class Recommend extends Component {
    render() {
        return (
            <div>
                <ul className='list'>
                    <li className='item'>
                        <div className='top'>
                            <div className="icon">
                                <img src={logo} alt='logo'></img>
                            </div>
                            <div className="text">
                                <h2>豆瓣电影</h2>
                                <p>引领生活的时代</p>
                            </div>
                        </div>

                        <div className='content'>
                            <h2>我们都是这样长大的</h2>
                            <p>我在小学里算是学霸，冲销v</p>
                            <div className="pic2"></div>
                            <div className="pic3"></div>
                        </div>
                        <div className="extra">
                            <div className="zan">
                                <img src={thumb} alt='thumb'></img>
                            </div>
                            <div className='commend'>
                                <img src={commend} alt='commend'></img>
                            </div>
                            <div className='send'>
                                <img src={send} alt={'send'}></img>
                            </div>
                        </div>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Recommend;