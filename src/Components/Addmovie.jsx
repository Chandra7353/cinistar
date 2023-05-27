import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Addmovie = () => {

  let navigate = useNavigate()

  let moviename = useRef();
  let hero = useRef();
  let heroine = useRef();
  let director = useRef();
  let gener = useRef();
  let poster = useRef();
  let trailer = useRef();
  let release = useRef();
  let rating = useRef();
  let synopsis = useRef();


  let handleAddNewMovie = (e)=>{
      e.preventDefault()
      // create new movie object
      let newMovie = {
          moviename : moviename.current.value,
          hero : hero.current.value,
          heroine : heroine.current.value,
          director : director.current.value,
          languages:[],
          gener:  gener.current.value,
          poster: poster.current.value,
          trailer: trailer.current.value,
          release: release.current.value,
          rating: rating.current.value,
          synopsis: synopsis.current.value
      }
      let options = document.getElementsByName("lang");
      for(let i = 0; i < options.length; i++) 
      {
          if(options[i].checked==true)
          {
              newMovie.languages.push( options[i].value )
          }  
      }

      // send the movie obj to the database
      fetch("http://localhost:4000/movies" , 
                                              {
                                                  method : "POST",
                                                  headers : {"Content-Type": "application/json"},
                                                  body : JSON.stringify(newMovie)
                                              })
      .then(()=>{
          alert("New movie added to database");
          navigate("/");
      })
  }

    return ( 
        <div id="add-movie">
            <form id="main" onSubmit={handleAddNewMovie}>
              <div id="user-details">
                <div>
                <span>Movie name</span> 
                <input type="text" placeholder="Enter Movie name" ref={moviename} required/>
                </div>
                <div>
                <span>Hero</span> 
                <input type="text" placeholder="Enter Hero name" ref={hero} required/>
                </div>
                <div>
                <span>Heroine</span> 
                <input type="text" placeholder="Enter Heroine name" ref={heroine} required/>
                </div>
                <div>
                <span>Director</span> 
                <input type="text" placeholder="Enter Director name" ref={director} required/>
                </div>
                <div>
                <span>Gener</span> 
                <input type="text" placeholder="Enter Gener" ref={gener} required/>
                </div>
                <div>
                <span>Poster</span> 
                <input type="url" placeholder="Poster link" ref={poster} required/>
                </div>
                <div>
                <span>Trailer</span> 
                <input type="url" placeholder="Trailer link" ref={trailer} required/>
                </div>
                <div>
                <span>Release Year</span> 
                <input type="number"min="1950" max="2023" ref={release} required/>
                </div>
                <div>
                <span>Rating</span> 
                <input type="number" step="0.1" min="1" max="10" ref={rating} required/>
                </div>
                <div>
                <span>Synopsis</span> 
                <textarea name="" id="area" cols="60" rows="3" ref={synopsis} required></textarea>
                </div>
              </div>
              <div className="lang">
                <fieldset  id="field" required>
                <legend >Select language </legend>
                <input type="checkbox" name="lang"  value="Kannada" /> <label htmlFor="">Kannada</label>
                <input type="checkbox" name="lang"  value="Tamil" /> <label htmlFor="">Tamil</label>
                <input type="checkbox" name="lang"  value="Telugu" /> <label htmlFor="">Telugu</label>
                <input type="checkbox" name="lang" value="Hindi"  /> <label htmlFor="">Hindi</label>
               

                </fieldset>  
            </div>
                
                                  
            <br />
            <input type="submit" value="Add movie"/>
          
        
            
           

            </form>
        </div>
     );
}
 
export default Addmovie;