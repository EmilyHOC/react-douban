import React, {Component} from 'react';
import StateList from '../../components/state-list/stateList'
import dongtai from '../../mock/dongtai'

class State extends Component {
    render() {
        return (
            <div>
              {dongtai.map((item,index)=>{
                  return (
                    <StateList  content={item} key={index}/>
                  )
              })}
            </div>
        );
    }
}

export default State;