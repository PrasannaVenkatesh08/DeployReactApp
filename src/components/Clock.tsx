import * as React from 'react';

export default class Clock extends React.Component {


    state = {
        date : new Date(),
        toggle : false ,
    }
    
    constructor(props:any){
        super(props) ;
        this.state.date = new Date() ;
    }

    componentDidMount(){
        setInterval(this.intervalFunc, 1000);
    }
    
    intervalFunc = () =>{
        this.setState({date : new Date()}) ;
    }

    handelEvent(id: any, e: any){
        console.log(e) ;
        this.setState({
            toggle : !this.state.toggle
        })
    }

    render(){
        return(
            <div>
                <div>Time is : {this.state.date.toLocaleTimeString()}</div>
                <button onClick={this.handelEvent.bind(this, 1)}>Click ME </button>
                <h3>{ this.state.toggle ? "Yes" : "No" }</h3>
            </div>            
        )
    }

}