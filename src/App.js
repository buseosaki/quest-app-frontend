import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import User from './components/User/User'

function App() {
  return (
    <div className="App">
     //BrowserRouter rootları wrapleyecek
     //browser rootlar sayfalar arası geçiş için gerekli.
     <BrowserRouter>
     <Navbar></Navbar>
     <Switch>//switchcase gibi. rootlar arasında hangisini seçeceğinizi gösterir.
        //gitmek istediğimiz pathin hangi componente denk geldigini yaziyoruz.
        <Route exact path="/" component={Home}></Route>
        <Route exact route="/users/:userId" component={User}></Route>
     </Switch>
     </BrowserRouter>

    </div>
  );
}

export default App;
