import React, {Component} from 'react';
import Line from '../../components/line/line';
import person from '../../assets/image/logo.png'
import {List} from "antd-mobile";
import remind from '../../assets/image/remind.png'
const Item = List.Item;


class Mine extends Component {
    render() {
        return (
            <div>
                <div className="personal">
                    <div className="pheader">
                        <div className="perpic">
                            <img src={person}></img>
                        </div>
                        <div className="username">米方</div><br/>
                        <div className="personpage">个人主页</div>
                        <div className="focus">关注 7</div>
                        <div className="befocus"> 被关注 0</div>
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
                    <Item>暂无新提醒</Item>
                </List>
                <Line/>
            </div>
        );
    }
}

export default Mine;