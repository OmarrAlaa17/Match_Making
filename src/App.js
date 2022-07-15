import {Switch, Route} from "react-router-dom"
import Nav from "./components/Nav";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <Route path='/' exact>
            <Home/>
        </Route>
        <Route path='/SignIn'>
            <LoginPage/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
