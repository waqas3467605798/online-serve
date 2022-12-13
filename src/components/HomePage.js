import react, {Component} from 'react'
import '../App.css';
import firebase from './Fire'
// import {Link, Route, BrowserRouter} from 'react-router-dom'




  class HomePage extends Component{
    constructor(){
      super();
      this.state ={
              name:''
      }

  }


 async componentDidMount(){
    // var userId = firebase.auth/().currentUser.uid;
    // var userEmail = firebase.auth().currentUser.email
    
    // this.setState({user:userId,userEmail:userEmail})
  }


  changeHandler=(e)=>{

    this.setState({name: e.target.value})
  
  console.log(this.state.name)
  }


  saveValue=()=>{
    firebase.database().ref('partyList').set({name: this.state.name})
  }
  

    render(){
        return(
          <div className='container'>
        This is Home of Online Serve

        <input type='text' placeholder='Type Your Name' name='name' onChange={this.changeHandler}/>
        <button onClick={this.saveValue}>save</button>
         
          </div>
        )
    }


  }

export default HomePage;



