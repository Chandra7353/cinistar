import { Link } from "react-router-dom";


const Navbar = () => {
    return ( 
        <nav >
             <div id="logo">
               <Link to="/"> <h1>Movie 🔅  </h1></Link>
             </div>
             <div id="search-bar" >
                <input type="search"  placeholder="Search for movies"/>
                <button>Search</button>
             </div>
             <div id="fav-movie" >
                <Link to="/fav"> Favorite</Link>
             </div>
             <div id="add-movie" >
                <Link to="/Addmovie"> Add Movie</Link>
             </div>
        </nav>
     );
}
 
export default Navbar;