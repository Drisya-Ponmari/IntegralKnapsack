import React from "react";
import ReactDOM from "react-dom";
import Knapsack from "../Algorithm/Knapsack";
class Input extends React.Component{
    constructor(props){
        super(props);
        this.state = {v:null, w:null, n:null,W:null};
        this.SubmitHandler = this.SubmitHandler.bind(this);
        this.handle = this.handle.bind(this);
        this.clicked = false;
    }
  
SubmitHandler(event){
  
    event.preventDefault();
    console.log("submit", this.state.v);
    let temp1 = this.state.v.split(',');
    let temp2 = this.state.w.split(',');
    const value_array = temp1.map((num) => {return Number(num)});
    const weight_array = temp2.map((num) => { return Number(num)});
    const number = value_array.length;
    const capacity = Number(this.state.W)
    this.setState({v:value_array, w:weight_array, n: number , W : capacity});
    this.clicked = true;
}
handle (){
    console.log("button clicked");
    this.clicked = true;
    console.log(this.clicked);
    //this.state.clicked ? console.log("hi") : null;
    //ReactDOM.render( <Knapsack v={this.state.v} w={this.state.w} n={this.state.n} W={this.state.W} />)
      //  Knapsack(this.state.v,this.state.w,this.state.n,this.state.W)
    
  /*  console.log("button clicked");
    this.clicked = true;
    console.log(this.clicked);*/
}

render(){
    return(
        <div>
    <form onSubmit={this.SubmitHandler}>
        <h1> </h1>
        <p>Enter the value array (Integers has to be separated in comma)</p>
        <input
            type='text'
            onChange = {event => { this.setState({ v: event.target.value})}}
        />
       
        <p>Enter the weight</p>
        <input
            type='text'
            onChange = {event => { this.setState({ W: event.target.value})}}
        />
       
         <p>Enter the weighting array (Integers has to be separated in comma)</p>
        <input
            type='text'
            onChange = {event => { this.setState({ w: event.target.value})}}
        />
        <input
        type = 'submit'
        />
    </form>
  {this.clicked  && <Knapsack v={this.state.v} w={this.state.w} n={this.state.n} W={this.state.W} />}
 
</div>
);
}
}
export default Input
//{this.state.clicked ? console.log("hi") : null }
//  <button onClick={this.handle} > Click </button>