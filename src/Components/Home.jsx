import { useEffect, useState } from "react";
import Movielist from "./Movielist";
const Home = () => {
    
    let[movies, setmovies] = useState(null);
    let [error , setError] = useState(null);
    let [pending , setPending] = useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("http://localhost:4000/movies")
            .then((res)=>{return res.json()})
            .then((data)=>{
                console.log(data);
                setmovies(data);
                setPending(false);
            })
            .catch((err)=>{
                setError("404 Network issue !!! please try again later");
                setPending(false);})
        } , 1000)
    } , [])
    

    return ( 
        <div className="home">   
          

           {pending==true  &&  <h1>Loading.......</h1>}

           {error && <h1> {error} </h1>}

            {movies && <Movielist movies={movies} title="All movies"/>}
        

            {movies && <Movielist movies={movies.filter((m)=>{return m.rating >=8.5 })} title="Top rated movies" />}
         
            {movies && <Movielist movies={movies.filter((m)=>{return m.gener.includes("Action")})} title="Action movies" />}
{/* 
            {movies && <Movielist movies={movies.filter((m)=>{return m.moviename.startwith("K")})} title="action" />  } */}
           

        </div>
     );
}
 
export default Home;