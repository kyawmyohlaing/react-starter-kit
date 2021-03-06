import React, {Component} from 'react';
import HighScore from './HighScore';
import './css/style.css';


class application extends Component {

  constructor(props){
      super(props);

      this.state = {
        count: 0,
        overTen: false,
      }

  }

  handleClick = () => {
    this.setState({count: this.state.count + 1
  });
}
  componentDidUpdate(props, state){
        if(this.state.count > 10 && this.state.count !== state.count && !this.state.overTen ){
        console.log("overten");
        this.setState({overTen: true});}
  }
   resetCount = (e) => {
     console.log("Event is", e);
     this.setState({
       count: 0,
       overTen: false,
     })
   }
  render() {

    let count = this.state.count
    return(
      <div>
      <h1>You Clicked Button {count} Times </h1>
      <HighScore 
          overTen={this.state.overTen}
         // onReset={ (e) => this.resetCount(e)}
         onReset={this.resetCount}
      />
      <span>
        <button onClick={() => this.handleClick()}>CLick Me</button>
      </span>
      </div>
      
      );
    
  }
}
export default application