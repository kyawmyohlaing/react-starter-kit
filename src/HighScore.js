import React, {Component} from 'react';


class HighScore extends Component {

render(){
    if(this.props.overTen){
    return(
        <h3>High Score of 10</h3>
    )
    } else {
        return null;
    }
}

}
export default HighScore