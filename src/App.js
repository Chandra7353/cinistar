import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Addmovie from './Components/Addmovie';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Moviedetails from './Components/Moviedetails';
import Favorites from './Components/Favorites';
import Editmovie from './Components/Editmovie';
import Searchpage from './Components/Searchpage';



function App() {

  
  return (
    <BrowserRouter>
      <div className="App" >
         <Navbar/>
         <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='Addmovie' element={<Addmovie/>} />
            <Route path='moviedetails/:id' element={<Moviedetails/>} />
            <Route path="/fav" element={<Favorites/>}/>
            <Route path="/search/:searchword" element={<Searchpage/>}/>
            <Route path="/edit/:id" element={<Editmovie/>}/>
            
        
         </Routes>
         
      </div>
    </BrowserRouter>
  );
}

export default App;
