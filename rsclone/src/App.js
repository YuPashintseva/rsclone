import ReactDOM from 'react-dom';
import  FilmList  from "./components/FilmList";
import FilmPage from "./components/FilmPage";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  //console.log(sessionStorage.getItem("val"))
 
  return (
    <div className="App">
<Router>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{margin:"24px 0"}}>
  <a className="navbar-brand" href="javascript:void(0)">Logo</a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb">
    <span className="navbar-toggler-icon"></span>
  </button>
  
  <div className="collapse navbar-collapse" id="navb">
   

    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
      <Link to='/FilmPage'> </Link>
      <Link to="/">  <a className="nav-link" >Home</a></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link">Link</a>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled">Disabled</a>
      </li>
    </ul>
   
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="text" placeholder="Search"/>
      <button className="btn btn-success my-2 my-sm-0" type="button">Search</button>
    </form>
    </div>
 </nav>

      <div id="ourRoot" className="d-flex justify-content-around">
        <div id="fl" className="films-list">
        <Route exact path="/" ><FilmList ref={(pageComponent)=>{Window.pageComponent = pageComponent}}/></Route>
    
        <Route path="/FilmPage"><FilmPage/></Route>
       
        
        </div>
      </div>
</Router>
    </div>
    
  ); 
}


/*
export function filmPage(el) {
  ReactDOM.render(
    <FilmPage value={el}/>,document.getElementById('ourRoot')
  )
}
*/
export default App;
