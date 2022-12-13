import react, {Component} from 'react'
import HomePage from './components/HomePage'
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom'





  class App extends Component{

  render(){
  return (
    // <BrowserRouter>
    <div>
      
 <HomePage/>

    </div>
    // </BrowserRouter>
  );
}
}

export default App;
