import reactDom from "react-dom";
import React from 'react'
import axios from "axios";
import Dialog from 'react-dialog'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link  , Redirect } from "react-router-dom";
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


class Registration extends React.Component{
      constructor(props)
      {
      super(props)

      this.state= {
        fname:'',
        lname:'',
        email:'',
        password:'',
        isSubmitClicked:false,
        isResetClicked:false,
        error:null,
        success:null,
        isDialogOpen: false

      }
     } 



      handleSubmitClick()
      {
        console.log('handle click called');
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          url:'http://localhost:3001/users',
          data: {
            firstName: this.state.fname,
            lastName: this.state.lname,
            email:this.state.email,
            password:this.state.password
          }
        };
      try{
        axios(options)
        .then((response) => {
          console.log('response for register---' ,response);
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
            fname:'',
            lname:'',
            email:'',
            password:'',
            isSubmitClicked:false,
            isResetClicked:true
          }
         )
      }


      getFname(e){
        console.log('e-->', e);
        this.setState(
                      {
                          fname:e.target.value,
                          isSubmitClicked:false

                      }
                     )
      }

      getLname(e){
        this.setState(
                      {
                          lname:e.target.value,
                          isSubmitClicked:false

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

      openDialog = () => this.setState({ isDialogOpen: true })
 
    handleClose = () => this.setState({ isDialogOpen: false })
  

render(){


 
    let result = null
    if(this.state.isSubmitClicked && this.state.fname && this.state.lname && this.state.email && this.state.password){
      result = (
                <>
                <li>{this.state.fname} {this.state.lname} {this.state.email} {this.state.password} </li>
                </>
              )
    }
    

    return (
      <>
      <Header/>
      <div className='log'>
         <form >
         
            <ToastContainer/>
         
            {this.state.success ?(<Redirect to="/" />
                    ):(
                        null
                    )}
                    <div class='banner'>
            <h1>Register</h1>
            <label for="fname">First name:</label>
            <input type="text" id="fname" value={this.state.fname} onChange={(e) => this.getFname(e)} /><br /><br />

            <label for="lname">Last name:</label>
            <input type="text" id="lname"  value={this.state.lname} onChange={(e) => this.getLname(e)} /><br/><br/>

            <label for="email">Email_id:</label>
            <input type="text" id="email"  value={this.state.email} onChange={(e) => this.getemail(e)} /><br/><br/>

            <label for="password">Password:</label>
            <input type="password" id="password"  value={this.state.password} onChange={(e) => this.getpassword(e)} /><br/><br/>

            <SubmitButtonDisplay handleSubmitButton = { () => this.handleSubmitClick()}/>
            <ResetButtonDisplay handleResetButton = { () => this.handleResetClick()}/>
            </div>
        </form> 
        </div>
        </>
    
    );
}
}
export default Registration