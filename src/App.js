import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User'

function App() {
  return (
    <div className="App">
     //BrowserRouter rootlari wrapleyecek
     //browser rootlar sayfalar arasi geçiş için gerekli.
     <BrowserRouter>
     <Navbar></Navbar>
     <Routes>//switchcase gibi. rootlar arasinda hangisini seçeceğinizi gösterir.
        //gitmek istediğimiz pathin hangi componente denk geldigini yaziyoruz.
        <Route path="/" element={<Home/>}></Route>
        <Route path="/users/:userId" element={<User/>}></Route>
     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
