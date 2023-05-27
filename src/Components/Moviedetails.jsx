import { useNavigate, useParams } from "react-router-dom";
import { useState,useEffect } from "react";
import Relevantmovies from "./Releventmovies";


const Moviedetails = () => {

    let {id}= useParams()
    let navigate = useNavigate();
    let[movie, setmovie] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies/" +id )
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovie(data);
                setPending(false);
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);})
        } , 1000)
    } , [id])

    let deletemovie=()=>{
        fetch("http://localhost:4000/movies/" +id , {method:"DELETE"})
        .then(()=>{navigate("/")})

    }

    return ( <div>
        
        {pending==true  &&  <h1>Loading.......</h1>}

        {error && <h1> {error} </h1>}
        {movie && <div>
                    <img src={movie.poster}/>
                     <h1>{movie.moviename}</h1>
                     <h1>{movie.hero}</h1>
                     <h1>{movie.heroine}</h1>
                     <h1>{movie. director}</h1>
                     <h1>{movie. synopsis}</h1>
                     <h1>{movie.languages.join(" , ")}</h1>
                     <h1>{movie.gener}</h1>
                     <iframe width="560" height="315" src={movie.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       

        </div> }
        
                    <button onClick={deletemovie}  >Delete</button>
                    
           {movie && <Relevantmovies gener= {movie.gener}/>}
            
        
        
    </div> );
}
 
export default Moviedetails;