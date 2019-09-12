import React from 'react';
import './App.css';
import 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'
import Characters from './components/Characterslist'
import CharacterDetails from './components/Characterdetails'
import{
  Switch,Route
} from 'react-router-dom'

class App extends React.Component{
  
  render()
  {
  return(
    <div className="App">
      <Navbar/>
      <Switch>
      <Route exact path="/" component={Characters}/>
      <Route exact path='/details' component={CharacterDetails}/>
     </Switch>
    </div>
  );
}
}

export default App;
