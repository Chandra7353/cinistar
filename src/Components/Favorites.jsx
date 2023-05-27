import { useEffect, useState } from "react";
import Movielist from "./Movielist";

const Favorites = () => {

 
    let[fav , setFav] = useState(null);

    useEffect( ()=>{
     setFav( JSON.parse(localStorage.getItem("fav")) );
    } , [])

    return(
        <div>
            {fav && <Movielist movies={fav} title="Favorites"/>  }
        </div>
    )
}
 
export default Favorites;