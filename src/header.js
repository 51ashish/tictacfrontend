
import React from 'react';
import{Link,Redirect} from 'react-router-dom'

class Header extends React.Component
{
        constructor(props)
        {
            super(props)
        this.state={
                val:false

            }
        }
    getcall(){

        localStorage.setItem('authToken',null)
       this.setState(
           
        {val:true}
        
        ) 
    }
    render(){
            console.log("val------",this.state.val);
      console.log(localStorage.getItem('authToken'));
        
            return(

                <ul >
                    {this.state.val ? 
                        (<Redirect to="/"/>):(null)}
                <li class="liLeft">
                <Link to="/">Home</Link>
                </li>
                <li class="liLeft">
                <Link to="/aboutus">About Us</Link>
                </li>
                { localStorage.getItem('authToken') != 'null' ? (
                    <li class="liLeft">
                    <Link to="/movie">Movie</Link>
                    </li>
                ):null }

                { localStorage.getItem('authToken') != 'null' ? (
                    <li class="liLeft">
                    <span   onClick={(e)=>this.getcall()}>Logout</span>
                 
                    </li>
                ):(
                    <li class="liLeft">
                    <Link to="/login">Login</Link>
                    </li>
                ) }                
               
            </ul>

            )
       }
}
export default Header