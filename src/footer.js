import React from 'react'



class Footer extends React.Component{



    render(){

return(
<footer>
            <div class="column">
                 
<p>Company</p>
 
                <ul class="foot">
                    <li>About Us</li>
                    <li>Careers</li>
                    <li>Privacy Policy</li>
                    <li>Contact Us</li>
                </ul>
            </div>
               
            <div class="column">
                 
<p>Learn</p>
 
                <ul class="foot">
                    <li>Algorithms</li>
                    <li>Data Structures</li>
                    <li>Languages</li>
                    <li>CS Subjects</li>
                    <li>Video Tutorials</li>
                </ul>
            </div>
                
            <div class="column">
                 
<p>Practice</p>
 
                <ul class="foot">
                    <li>Company-wise</li>
                    <li>Topic-wise</li>
                    <li>Contests</li>
                    <li>Subjective Questions</li>
                </ul>
            </div>
        </footer>
)

}


}
export default Footer