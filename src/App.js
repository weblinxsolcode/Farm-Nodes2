import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './Components/Home';
import  AOS  from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    AOS.init();
},[])

  return (
    <>
      <Router>
        {/* <Header /> */}
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route >
            <Home />
          </Route>
       
        </Switch>
        {/* <Footer /> */}
      </Router>

    </>
  );
}

export default App;
