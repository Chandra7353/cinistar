import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Relevantmovies = (gener) => {
   let [movies, setmovies] =useState(null);


    useEffect(()=>{
        fetch("http://localhost:4000/Movies")
        .then((res) =>{return res.json()})
        .then((data)=> {setmovies(data)})
    },[])
    return ( <div className="relevent-movie">
      
           
{/* 
      {movies &&  <Movielist movies={movies.filter((m)=>{return m.gener.split(" ").some((g)=>{
                                      return m.gener.includes(g)})})}
                                       title="Relevent-movies"/>} */}

              {movies &&  <Movielist movies={movies.filter((m)=>{return m.gener.includes(gener)})}
                                       title="Relevent-movies"/>}

        
    </div> );
}
 
export default Relevantmovies;