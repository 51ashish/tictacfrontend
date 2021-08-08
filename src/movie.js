import reactDom from "react-dom";
import { useState} from 'react'
import React from 'react'
import { render } from "@testing-library/react";
import Rating from "react-rating";
import axios from 'axios'
import Images from './avengers-end-game-collage-poster-12k-72-7680x4320.jpg'
import Header from './header';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
class Movie extends React.Component {
      constructor(props)
      {
      super(props)
      // this.state.data = [
      //   {
      //     name:'The Matrix',
      //     rating:7.5,
      //     category:'Action'
      //   },
      //   {
      //     name:'Focus',
      //     rating:6.9,
      //     category:'Comedy'
      //   },
      //   {
      //     name:'The Lazarus Effect',
      //     rating:6.4,
      //     category:'Thriller'
      //   },
      //   {
      //     name:'Everly',
      //     rating:5.0,
      //     category:'Action'
      //   },
      //   {
      //     name:'Maps to the Stars',
      //     rating:7.5,
      //     category:'Drama'
      //   }
      // ]
      this.state= {
        name:'',
        rating:'',
        category:'',
        character:'',
        review:'',
        gener:'',
        poster:'',
        filterData:[],
        event:false,
        data:[],
        open: false,
        openMovie:false,
        selectedOption: null
      }

      // this.state.data  = [
      //       {
      //         "name":"To Wong Foo Thanks for Everything, Julie Newmar","id":"tt0114682",
      //         "character":"Wesley Snipes, Patrick Swayze",
      //         "y":1995,
      //         "category":"Action",
      //         "rating":4,
      //         "i":["https://m.media-amazon.com/images/M/MV5BYjZmOTU3MjYtY2NhNi00ZmMxLWE5ZDgtNGVlYjVmOWMxYzI4XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",663,988],
      //         "v":[{"name":"To Wong Foo, Thanks for Everything! Julie Newmar","id":"vi2495266585","category":"Action","character":"2:13","i":["https://m.media-amazon.com/images/M/MV5BMjVkYzU5MDktMzFhMC00YWJlLWJiZDEtZTIwYjYzMzczMDljXkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",1920,1080]},
      //       {"rating":5,"name":"To Wong Foo, Thanks for Everything! Julie Newmar","id":"vi2528821017","category":"Thriller","character":"2:25","i":["https://m.media-amazon.com/images/M/MV5BNmU0NDMwNTgtMjE3Yy00YjNiLWI0NTItN2E4ZjRkZGUxNTczXkEyXkFqcGdeQTNwaW5nZXN0._V1_.jpg",1920,1080]},
      //       {"rating":6,"name":"To Wong Foo, Thanks for Everything! Julie Newmar","id":"vi1845362969","category":"Drama","character":"1:35","i":["https://m.media-amazon.com/images/M/MV5BOGI0YmZmODQtOTg3Ny00NmExLWJiNDEtZTYwNjI5MDJjZWEzXkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",250,200]}]},
      //       {"rating":7.5,"name":"Armour of God","id":"tt0091431","character":"Jackie Chan, Alan Tam","y":1986,"category":"Comedy","rating":1,"i":["https://m.media-amazon.com/images/M/MV5BMGZkZjZjOTItNDZkOS00MDY1LWE5MGUtNjMyMTJjZmM5ZTlkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",1000,1500],"v":[{"rating":4,"name":"Operation Condor 2: The Armour of the Gods","id":"vi1938358553","character":"4:16","i":["https://m.media-amazon.com/images/M/MV5BMmFhYTQyZjItMjJkNS00ZTYyLWJkOWUtOTFmNTc0NDJiODQ1XkEyXkFqcGdeQXVyNzU1NzE3NTg@._V1_.jpg",480,360]}]},
      //       {"rating":8,"name":"Jonathan Patrick Foo","id":"nm1463426","character":"Actor, Tekken (2010)","i":["https://m.media-amazon.com/images/M/MV5BYmEyMGEwMTAtMDgwMi00MWNhLWI5MjEtZmQxMjc5MzkyNDk4XkEyXkFqcGdeQXVyODA4NTQ4NzI@._V1_.jpg",426,600]},
      //       {"rating":9,"name":"Footloose","id":"tt0087277","character":"Kevin Bacon, Lori Singer","y":1984,"category":"Action","i":["https://m.media-amazon.com/images/M/MV5BYTE2NjQ1MjQtOTdmNi00NjJmLWJlYTItNmFhYzBmMWM4NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",560,857]},
      //       {"rating":6.8,"name":"Only Fools and Horses","id":"tt0081912","character":"David Jason, Nicholas Lyndhurst","y":1981,"yr":"1981-2003","category":"Drama","i":["https://m.media-amazon.com/images/M/MV5BYmI1NGIwNzYtOTVlMS00ZGYwLWE0ZTktYzVmMGVlMmRmN2QxXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg",752,1053]},
      //       {"rating":7,"name":"Fool's Gold","id":"tt0770752","character":"Matthew McConaughey, Kate Hudson","y":2008,"category":"Thriller","i":["https://m.media-amazon.com/images/M/MV5BMTg3NTQ2MDY4OF5BMl5BanBnXkFtZTcwOTAzMjU1MQ@@._V1_.jpg",300,444]},
      //       {"rating":8,"name":"Food Wars","id":"tt4731072","character":"Yoshitsugu Matsuoka, Minami Takahashi","y":2015,"yr":"2015-","category":"Drama","i":["https://m.media-amazon.com/images/M/MV5BODJhZDFjMTItZTZjZC00MGM0LWFlM2UtZTE2MTU4YjE0MzMxXkEyXkFqcGdeQXVyNTIxNDgzOTg@._V1_.jpg",560,791]},
      //       {"rating":9,"name":"Footloose","id":"tt1068242","character":"Kenny Wormald, Julianne Hough","y":2011,"category":"Thriller","i":["https://m.media-amazon.com/images/M/MV5BMTY3MjIzMjk4M15BMl5BanBnXkFtZTcwMzMxMzIzNg@@._V1_.jpg",1310,2048]}
      //     ]
      }
componentDidMount(){

  const options = {
    method: 'GET',
    headers: { 'content-type': 'application/json', 'Authorization':'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGM0Y2M3YWM1MWEwMTJhNTEwZmNmOTAiLCJpYXQiOjE2MjM1MTAyNDl9.oBQGhaHGnBVB7_fluw4EtYLlCsy7nmsM_Rdz1Fq5uVY' },
    url:'http://localhost:5000/movie',
  };

  axios(options)
  .then((response) => {
    console.log('response---' ,response.data);
    this.setState(
      {
         data: response.data.data
      }
      )
  }, (error) => {
    console.log(error);
  });

}

 
 
    filterreset(e)
    {

 

         this.setState(
           {
            name:'',
            rating:'',
            category:'',
            filterData:[],
            event:false,
           }
           )
        
    }

     filtermovie(e)
     {
      console.log("e.target.value.....", e.target.value);

          let updatedFilterData =  this.state.data.filter( val => val.name.includes(e.target.value) )
          console.log("filter data.....", updatedFilterData);

          this.setState(
            {
               name: e.target.value,
               filterData:updatedFilterData,
               event:true
            }
            )
         
     }
  



     filterrating(e)
     {
      let updatedFilterData =  this.state.data.filter( val => Math.round(val.rating) == (e.target.value) )
      console.log("filter data.....", updatedFilterData);

      this.setState(
        {
           name: true,
           filterData:updatedFilterData,
           event:true
        }
        )

     }
     filtergenre(e)
     {
      let updatedFilterData =  this.state.data.filter( val => val.category == e.target.value) 
      console.log("filter data.....", updatedFilterData);

      this.setState(
        {
           name: true,
           filterData:updatedFilterData,
           event:true
        }
        )

     }
     ratingChanged = (newRating) => {
      console.log(newRating);
    };


    toggleDialog = () => {
      this.setState({
        visible: !this.state.visible,
      });
    };
    getratt(e){
      console.log("Ratting...",e);

    }

                                                Addmovie(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                                    openmovie:true
                                                    }
                                                  )
                                                
                                                }
                                                addreview(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                                  
                                                    review: e.target.value
                                                    }
                                                  )
                                                
                                                }
                                                addname(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                                  
                                                    name: e.target.value
                                                    }
                                                  )
                                                
                                                }
                                                addcharacter(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                                  
                                                    character: e.target.value

                                                    }
                                                  )
                                                
                                                }
                                                addgener(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                                  
                                                    gener: e.target.value

                                                    }
                                                  )
                                                }

                                                addrating(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                              
                                                    rating: e.target.value

                                                    }
                                                  )
                                                
                                                }


                                                addposter(e)
                                                {
                                                e.preventDefault();
                                                      this.setState(
                                                    {
                                              
                                                    poster: e.target.value

                                                    }
                                                  )
                                                
                                                }


    render(){
      let result = null

      const handleClickOpen = () => {
        this.setState({
          open: true
        });
      };


      const handleClickMovieOpen = () => {
        this.setState({
          openMovie: true
        });
      };
    

      const handleMovieClose = () => {
        this.setState({
          openMovie: false
        });
      };

      const handleMovieAgree = () => {
        console.log('this.state-------->', this.state);
        const options = {
          method: 'POST',
          headers: { 'content-type': 'application/json'},
          url:'http://localhost:5000/movie',
          data:{
            poster: this.state.poster,
            name:this.state.name,
            character:this.state.character,
            gener:this.state.gener,
            rating:this.state.rating,
            review:this.state.review
         }
        };
        axios(options)
        .then((response) => {
          console.log('response---' ,response.data);
          this.setState({
            openMovie: false
          });
        }, (error) => {
          console.log(error);
        });
      };

      const handleClose = () => {
        this.setState({
          open: false
        });
      };

      if(this.state.filterData.length >0 && this.state.name)
      {
 
        console.log('this.state.filterData', this.state.filterData);
        result= this.state.filterData.map( (value)=> {
          return (
                    <tr>
                        <td>
                          <img src={value.pic} height="265px" width="265px" />
                        </td> 
                        <td>
                          {value.character}
                        </td> 
                        <td>
                          {value.name}
                        </td> 
                        <td>
                          <Rating
                              emptySymbol={<img src='asset/image/star-grey.png' height='15px' width='15px' className='icon' />}
                              fullSymbol={<img src='asset/image/star-grey.png' height='15px' width='15px' className='icon' />}
                              placeholderSymbol={<img src='asset/image/star-red.png' height='15px' width='15px' className='icon' />}
                              
                              placeholderRating={value.rating}
                                readonly
                                stop={10}
                          />
                        </td> 
                        <td>
                          {value.category}
                        </td>   
                        <td>
                        <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                          Add Ratting
                        </Button>
                        </td>                   
                    </tr>
                )
        })

      }
      
      return(
        <>
                           {/*     
                                          This is for add movie diolog box                        
                            */}
      <Dialog
          open={this.state.openMovie}
          onClose={handleMovieClose}
          aria-labelledby="responsive-dialog-name"
          fullWidth
        >
          <DialogTitle id="responsive-dialog-name">{"Add Movie"}</DialogTitle>
          <DialogContent>
          <DialogContentText>  
                    <input type="text" placeholder="Enter poster"  onChange={(e)=>this.addposter(e)}></input>
            </DialogContentText>
            <DialogContentText>  
                    <input type="text" placeholder="Enter Movie name"  onChange={(e)=>this.addname(e)}></input>
            </DialogContentText>

            <DialogContentText>  
                    <input type="text" placeholder="Enter Movie character"  onChange={(e)=>this.addcharacter(e)}></input>
            </DialogContentText>
            <DialogContentText>  
                    <input type="text" placeholder="Enter Movie gener"  onChange={(e)=>this.addgener(e)}></input>
            </DialogContentText>
            <DialogContentText>  
            <select name="rating" onChange={(e)=>this.addrating(e)}>
                      <option value="0" selected="selected">Select Rating</option>
                     
                      <option value="1">*</option>
                      <option value="2">* * </option>
                      <option value="3">* * *</option>
                      <option value="4">* * * *  </option>
                      <option value="5">* * * * *  </option>
                      <option value="6">* * * * * *  </option>
                      <option value="7">* * * * * * *  </option>
                      <option value="8">* * * * * * * *  </option>
                      <option value="9">* * * * * * * * *  </option>
                      <option value="10">* * * * * * * * * * </option>

                                    
                      </select>
            </DialogContentText>
            <DialogContentText>
              <textarea
                rows ='10'
                cols ='53'
                onChange={(e)=>this.addreview(e)} 
                ></textarea>         
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleMovieClose} color="primary">
              Disagree
            </Button>
            <Button onClick={handleMovieAgree} color="primary" autoFocus >
              Agree
            </Button>
          </DialogActions>
        </Dialog>
                            {/*     
                                          This is for add Rating diolog box                        
                            */}

                                  <Dialog
                                      open={this.state.open}
                                      onClose={handleClose}
                                      aria-labelledby="responsive-dialog-name"
                                      fullWidth
                                    >
                                      <DialogTitle id="responsive-dialog-name">{"Add Ratting"}</DialogTitle>
                                      <DialogContent>
                                        <DialogContentText>
                                          <Rating
                                            fractions={2}
                                            stop={10}
                                            onChange={(e)=>this.getratt(e)}
                                            />         
                                        </DialogContentText>

                                        <DialogContentText>
                                          <textarea
                                            rows ='10'
                                            cols ='53'
                                            onChange={(e)=>this.getratt(e)}
                                            >fdfd</textarea>         
                                        </DialogContentText>
                                      </DialogContent>
                                      <DialogActions>
                                        <Button autoFocus onClick={handleClose} color="primary">
                                          Disagree
                                        </Button>
                                        <Button onClick={handleClose} color="primary" autoFocus>
                                          Agree
                                        </Button>
                                      </DialogActions>
                                    </Dialog>
                                    <Header/>
        <div className='desig'>
        
         
                <form >
                
                  
                      <h1>MOVIES</h1>
                      <input type="text"  placeholder="Enter movie name"  onChange={(e)=>this.filtermovie(e)}></input> 
                      <select name="rating" onChange={(e)=>this.filterrating(e)}>
                      <option value="0" selected="selected">Select Rating</option>
                     
                      <option value="1">*</option>
                      <option value="2">* * </option>
                      <option value="3">* * *</option>
                      <option value="4">* * * *  </option>
                      <option value="5">* * * * *  </option>
                      <option value="6">* * * * * *  </option>
                      <option value="7">* * * * * * *  </option>
                      <option value="8">* * * * * * * *  </option>
                      <option value="9">* * * * * * * * *  </option>
                      <option value="10">* * * * * * * * * * </option>

                                    
                      </select>
                    

                      <select name="Genres" onChange={(e)=>this.filtergenre(e)}>
                      <option value="" selected="selected">Genres</option>
                      <option value="Action">Action</option>
                      <option value="Comedy">Comedy</option>
                      <option value="Thriller">Thriller</option>
                      <option value="Drama">Drama</option>
                      </select>
                      <div className="back">
                      <Button variant="outlined" color="primary"  onChange={(e)=>this.filterreset(e)} >Reset</Button>

                      <Button variant="outlined" color="primary" onClick={handleClickMovieOpen}>
                          Add Movie
                        </Button>

                    </div>                        
                

                      {this.state.filterData.length >0  ? (
                       <div className="divScroll">
                                                            <table class="center" border="1"  >
                                                            <tr>
                                                                <th>
                                                                  Poster
                                                                </th> 
                                                                <th>
                                                                  Character
                                                                </th> 
                                                                <th>
                                                                  Name
                                                                </th> 
                                                                <th>
                                                                  Rating
                                                                </th> 
                                                                <th>
                                                                  Genres
                                                                </th>  
                                                                  
                                                                <th>
                                                                  Review
                                                                </th>              
                                                            </tr>

                                                            {result}
                                                            </table>
                                                            </div>
                                                          ):
                                                          this.state.event ?
                                                          <div>
                                                            No record found
                                                          </div>
                                                          :
                                                          null
                    }
                    
                   
                </form>
                </div>
                </>
              )            
}
 }
export default Movie