import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';
import axios from "axios";



class Debits extends Component{
    constructor(){
        super();
        this.state={
            DebitData: [],
            DescInput: null,
            amountInput: null,
            time: null,
        }
       
    }
    componentDidMount(){
        axios
         .get("https://moj-api.herokuapp.com/debits")
         .then((response) => {
        this.setState({DebitData: response.data})
      
         })
         .catch((err) => {
             console.log(err);
         });
    }
    handleDescInput = (event) => {
        this.setState({DescInput: event.target.value});
    }
      handleAmountInput = (event) => {
        this.setState({amountInput: event.target.value});
    }
    
    onAdd = (event) => {
        if(this.state.DescInput != null && this.state.amountInput != null)
        {
       event.preventDefault();
       var currentdate = new Date(); 
       this.state.time = currentdate.getDate() + "/"
                       + (currentdate.getMonth()+1)  + "/" 
                       + currentdate.getFullYear() + " @ "  
                       + currentdate.getHours() + ":"  
                       + currentdate.getMinutes() + ":" 
                       + currentdate.getSeconds();
        let total = this.props.accountBalance - parseInt(this.state.amountInput)
        this.props.onAmountChange(total);

        const DebitBox = this.state.DebitData;
        DebitBox.unshift({
            description: this.state.DescInput,
            amount: this.state.amountInput,
            date: this.state.time,
        })
        this.setState({
            DebitData: DebitBox,
          });
        }
        else{
            event.preventDefault();
            alert("Please enter Description and Amount");
        }
    }
  render(){
      return(
          <div className = "container">
              <h3>Debits</h3>
              <Link className ="btn btn-danger" to='/'>Home</Link>
              <AccountBalance accountBalance = {this.props.accountBalance}/>
              <form onSubmit={this.onAdd}>
                  <input placeholder = "Enter Description" value={this.state.DescInput} onChange={this.handleDescInput}></input>
                  <input placeholder ="Enter Amount" value={this.state.amountInput} onChange={this.handleAmountInput}></input>
                  <button className="btn btn-danger">Add</button>
              </form>
              {this.state.DebitData.map(data => {
                  return(
                     <div className = " border border-danger mt-3" key={data.id}>
                         <p>{data.description}</p>
                         <p>{data.amount}</p>
                         <p>{data.date}</p>
                     </div>
                  )
              })}
          </div>
      );
  }
}
export default Debits;