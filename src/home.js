import reactDom from "react-dom";
import React from 'react'
import axios from "axios";
import { Link  , Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';


function LoginButtonDisplay(props) {

  return (
      <input type="button" value="Login" />
  )
}
function RegisterButtonDisplay(props) {

  return (
      <input type="button" value="Register" />
  )
}
class Home extends React.Component{
    render(){

    return(
      <>
      <Header/>
      <div className='welc'>
        <form>
      <div class="banner">
          <h2>MOVIE WORLD</h2>
        <div>
                <Link to="/login">
              <LoginButtonDisplay/>
              </Link>
            
              <Link to="/registration">
              <RegisterButtonDisplay/>
              </Link>
        </div>
        <a href="#" class="fa fa-facebook"></a>
        <a href="#" class="fa fa-twitter"></a>

        </div>
    </form> 
    </div>
   
    </>
    )
}
}

  
export default Home;