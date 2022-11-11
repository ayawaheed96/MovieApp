import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

import Header from "./components/header/header";
import Login from "./Pages/login/login";
import Movies from "./Pages/movies/movies";
import Register from "./Pages/register/register";
import NotFound from './Pages/notfound/notfound';  
import Details from "./Pages/movies/details";
import { Home } from "./Pages/home/home";
import Favorite from "./Pages/favorite/favorite";
function App() {
  
  return (
    <>
    <Router>
    <Header/>
      <Switch>
      <Route path='/' exact component={Home}/>
        <Route path='/movies' exact component={Movies}/>
        <Route path='/favorite' exact component={Favorite}/>
        <Route path='/login' exact component={Login}/>
        <Route path='/register' exact component={Register}/>
        <Route path='/details/:id' exact component={Details}/>
        <Route path='*' exact component={NotFound}/>
      </Switch>   
    </Router>
    </>
  );
}

export default App;
