import React , {Component, Componet} from "react";

class Welcome extends Component{
    constructor(props){
        super(props);
        };
    render(){
        return(
            <div>
                <h5>{this.props.title}</h5>
                <p>This is a class component</p>
            </div>
        )
    }
}
export default Welcome;