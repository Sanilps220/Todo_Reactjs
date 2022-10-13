import React, { Component } from 'react'

export class Demonew extends Component {
    constructor(props){
      super(props);
        this.state ={
            counter : 0
        }  
    }
    clickhandeler=()=>{
        this.setState((prev,props)=>( {counter : prev.counter+1 }))
    }

  render() {
    return (
      <div>
         <p>{this.state.counter}</p>
        <button onClick={ this.clickhandeler }> Click</button>
      </div>
    )
  }
}

export default Demonew