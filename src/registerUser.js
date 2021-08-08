import React from 'react';
import axios from 'axios';

function RegisterUser (){

    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/jason', 'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0Y2M3YWM1MWEwMTJhNTEwZmNmOTAiLCJpYXQiOjE2MjM1MTAyNDl9.oBQGhaHGnBVB7_fluw4EtYLlCsy7nmsM_Rdz1Fq5uVY' },
        url:'http://localhost:3001/movies',
      };

      axios(options)
      .then((response) => {
        console.log('response---' ,response);
      }, (error) => {
        console.log(error);
      });


    return(
        <div className="back">
            <h1>Welcome to register page!</h1>
        </div>
        )
}
  
export default RegisterUser;