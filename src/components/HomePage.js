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

    alert('Successfully saved....!')

    console.log(this.state.name)
  }
  

    render(){
        return(
          <div className='container' style={{backgroundColor:'#f2f2f2'}}>
          <div style={{fontSize:'200%', textAlign:'center', backgroundColor:'lightyellow', color:'green'}}>  <i className="material-icons" style={{fontSize:'110%', color:'goldenrod'}} >brightness_low</i> Mansoorabad Digital Market <i className="material-icons" style={{fontSize:'110%', color:'goldenrod'}} >brightness_low</i> </div>
<br/>
              <div style={{border:'1px solid gray', backgroundColor:'white', width:'50%', height:'150px', margin:'auto', textAlign:'center', color:'red', fontSize:'30px', borderRadius:'18px'}}>
                Services 
              </div>
        
        
        
        
        This is Home of Online Serve and serve 

        <input type='text' placeholder='Type Your Name' name='name' onChange={this.changeHandler}/>
        <button onClick={this.saveValue}>save</button>
         
          </div>
        )
    }


  }

export default HomePage;



