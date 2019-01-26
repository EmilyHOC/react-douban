import React, {Component} from 'react';
import {connect} from 'react-redux';

class Hotmovie extends Component {
    render() {
        let moviedata=this.props.Search;
        return (
            <div className="pic">
                {
                    moviedata.map((item)=>(
                            <a key={item.id}>
                                <img src={item.imgUrl} alt='index' className='moviepic'/>
                                <p>{item.name}</p><p>{item.score}</p>
                            </a>

                        )
                    )

                }

            </div>
        );
    }
}

export default connect((state)=>({Search:state.Search.moviedata}),null)(Hotmovie);