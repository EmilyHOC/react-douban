import React,{Component} from 'react';
import Line from '../line/line'



class StateList extends Component{
  constructor(props){
    super(props)
    this.props={
      content:{}
    }
  }
  render(){
    const {content} =this.props
    console.log(content)
    return (
      <div>
        <div className='stateList'>
          <div className="title">
            <div className="avatar">
              <img src={content.avatar}  alt="1"></img>
            </div>
            <div className="flex-wrapper">
              <div className="title">{content.title}</div>
              <div className="tag">{content.tag}</div>
            </div>
          </div>
          <div className="article">
            <div className='content'>{content.content}</div>
          </div>
          <div className="pic">
            <img src={require('../../assets/image/1.png')} alt="1"></img>
            <img src={require('../../assets/image/2.png')} alt="1"></img>
          </div>
        </div>
        <div className="small">
          <div className="small-wrapper">
            <div className="thumb">
              <img src={require('../../assets/image/thumb.png')}  alt="1"></img>
            </div>
            <div className="commend">
              <img src={require('../../assets/image/commend.png')}  alt="1"></img>
            </div>
            <div className="sendTo">
              <img src={require('../../assets/image/sendto.png')}  alt="1"/>
            </div>
          </div>
        </div>
        <Line/>
      </div>
    )
  }
}
export default StateList