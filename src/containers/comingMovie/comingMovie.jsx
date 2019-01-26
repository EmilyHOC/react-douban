import React, {Component} from 'react';
import {connect} from 'react-redux';
class ComingMovie extends Component {
    render() {
        const comingdata=this.props.Coming;
        return (
            <div className="pic">
                {
                    comingdata.map((item)=>(
                            <a key={item.id}>
                                <img src={item.imgUrl} alt='index' className='moviepic'/>
                                <p>{item.name}</p>
                            </a>

                        )
                    )

                }

            </div>
        );
    }
}

export default connect((state)=>({Coming:state.Coming.comingmoviedata}))(ComingMovie);