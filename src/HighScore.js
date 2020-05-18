import React, {Component} from 'react';


class HighScore extends Component {

render(){
    if(this.props.overTen){
    return(
        <h3>High Score of 10
        
        <button onClick={this.props.onReset}>Reset</button>
        </h3>
        //<button onClick={(e) => this.props.onReset(e)}>Reset</button>
        //<button onClick={this.props.onReset}>Reset</button>
    )
    } else {
        return null;
    }
}

}
export default HighScore