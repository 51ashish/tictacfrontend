import reactDom from "react-dom";
import React from 'react'
import axios from "axios";
import { Link  , Redirect } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './header';

function SubmitButtonDisplay(props) {

  return (
      <input type="button" value="Submit" onClick={ props.handleSubmitButton }/>
  )
}
function ResetButtonDisplay(props) {

    return (
        <input type="button" value="Reset" onClick={ props.handleResetButton }/>
    )
  }
  function RegisterButtonDisplay(props) {

    return (
        <input type="button" value="Register" />
    )
  }

class Home extends React.Component{
    constructor(props)
    {
    super(props)

    this.state= {
      email:'',
      password:'',
      isSubmitClicked:false,
      isResetClicked:false,
    }
   } 



    handleSubmitClick()
    {
     
      console.log('handle click called');
      const options = {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        url:'http://localhost:3001/users/login',
        data: {
       
          email:this.state.email,
          password:this.state.password
        }
      };
    try{
      axios(options)
      .then((response) => {
        console.log('response for login---' ,response);
        if(!response.data.success)
        {

          this.setState(
            {
              error: response.data.message
            }
            )
            toast.error(response.data.message)
        }else{

          this.setState(
            {
              success: response.data.message
            }
            )
            localStorage.setItem('authToken', response.data.response.token);
            toast.success(response.data.message)
        }

      }, (error) => {
        console.log('error---',error.message);
      });

    }
    catch(err){
      console.log('error for register---' ,err);
      
    }

      this.setState(
        {
          isSubmitClicked:true,
          isResetClicked:false
        }
       )
    }


    handleResetClick()
    {
      console.log('handle click called');

      this.setState(
        {
     
          email:'',
          password:'',
          isSubmitClicked:false,
          isResetClicked:true
        }
       )
    }

  
    getpassword(e){
        this.setState(
                      {
                          password:e.target.value,
                          isSubmitClicked:false

                      }
                     )
      }
      getemail(e){
        this.setState(
                      {
                          email:e.target.value,
                          isSubmitClicked:false

                      }
                     )
      }

    render(){


 
        let result = null
        if(this.state.isSubmitClicked && this.state.email && this.state.password){
          result = (
                    <>
                    <li>{this.state.email} {this.state.password}</li>
                    </>
                  )
        }


    return(
      <>
      <Header/>

      <div className='log'>
        <form >
                    <ToastContainer/>

                    {this.state.success ?(<Redirect to="/movie" />
                    ):(
                        null
                    )}
                    <div class='banner'>
                  <h1>Welcome</h1>
        <label for="email">Email_id:</label>
        <input type="text" id="email"  value={this.state.email} onChange={(e) => this.getemail(e)} /><br/><br/>

        <label for="password">Password:</label>
        <input type="text" id="password"  value={this.state.password} onChange={(e) => this.getpassword(e)} /><br/><br/>

        <SubmitButtonDisplay handleSubmitButton = { () => this.handleSubmitClick()}/>
        <ResetButtonDisplay handleResetButton = { () => this.handleResetClick()}/>
        <Link to="/registration">
        <RegisterButtonDisplay/>
        </Link>
        </div>
       
    </form> 
    </div>
    </>

    )
}
}
  
export default Home;