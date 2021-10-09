
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Foods from './Components/Foods/Foods';
import FoodDetails from './Components/FooodDetails/FoodDetails';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      
      {/* create router */}
      <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/foodDetails/:IdMeal">
          <FoodDetails></FoodDetails>
        </Route>
        <Route path="/foods">
          <Foods></Foods>
        </Route>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
