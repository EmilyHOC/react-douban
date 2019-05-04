import React, {Component} from 'react';
import Line from '../../components/line/line';
import {List} from "antd-mobile";
import remind from '../../assets/image/remind.png'
const Item = List.Item;


class Mine extends Component {
    render() {
        return (
            <div className='mine-wrapper'>
                <div className="title">
                  <div className="avatar">
                    <img src={require('../../assets/image/logo.png')}></img>
                  </div>
                  <div className="content">
                    <div className="name">米方</div>
                    <div className="focus">关注10 被关注3</div>
                  </div>
                </div>
                <Line/>
                <List>
                    <Item
                        arrow="horizontal"
                        thumb={remind}
                        multipleLine
                        onClick={() => {}}
                    >
                       提醒
                    </Item>
                    <Item  arrow="horizontal"
                           thumb={remind}
                           multipleLine
                           onClick={() => {}}>暂无新提醒</Item>
                    <Item  arrow="horizontal"
                           thumb={remind}
                           multipleLine
                           onClick={() => {}}>我的日记</Item>
                    <Item  arrow="horizontal"
                           thumb={remind}
                           multipleLine
                           onClick={() => {}}>我的关注</Item>
                </List>
                <Line/>
            </div>
        );
    }
}

export default Mine;