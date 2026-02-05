import React, { Component } from 'react'

 class Lifecycle extends Component {
    constructor(props){
        super(props);
          this.state={
            count:0,
            name:this.props.myname,
        };
        console.log("Constructor called..")
     }
     componentDidMount(){
        console.log("ComponentDidMount called..")
        setTimeout(()=>{
            this.setState({
                name:"ABCD"
            })
        },3000);
     }
     static getDerivedStateFromProps(props,state){
        console.log("GetDerivedStateFromProps called..")
        console.log("props");
        console.log(props);
        console.log("state");
        console.log(state);
        return null
     }
     shouldComponentUpdate(){
        console.log("ShouldComponentUpdate called..")
        return true;
     }
     getSnapshotBeforeUpdate(prevProps,prevState){  
        console.log("GetSnapshotBeforeUpdate called..")
        console.log("previous state");
        console.log(prevState);
        return null;
     }
     componentDidUpdate(){
        console.log(" Finally Component Update...")
     }

  render() {
    console.log("Render called..")
    return (
        <>
      <div><h1>Lifecycle</h1></div>
        <h4>Name is == {this.state.name}</h4>
        <h4>count is == {this.state.count}</h4>
        </>
    )
  }
}
export default Lifecycle