import React, {Component} from 'react';


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
  render() {

    let count = this.state.count
    return(
      <div>
      <h1>You Clicked Button {count} Times </h1>
      {(this.state.overTen) ?
        <h3>High Score of 10</h3>
        : null
      }
      <span>
        <button onClick={() => this.handleClick()}>CLick Me</button>
      </span>
      </div>
      
      );
    
  }
}
export default application