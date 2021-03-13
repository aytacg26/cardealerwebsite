import React, { Fragment } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import './flickity.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Arac from './components/pages/Arac/Arac';
import Galeriler from './components/pages/Galeriler/Galeriler';
import Otomobil from './components/pages/Otomobil/Otomobil';
import Motosiklet from './components/pages/Motosiklet/Motosiklet';
import Sahibinden from './components/pages/Sahibinden/Sahibinden';
import Ticari from './components/pages/Ticari/Ticari';

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/ticari' component={Ticari} />
          <Route exact path='/sahibinden' component={Sahibinden} />
          <Route exact path='/motosiklet' component={Motosiklet} />
          <Route exact path='/otomobil' component={Otomobil} />
          <Route exact path='/galeriler' component={Galeriler} />
          <Route exact path='/arac/:id' component={Arac} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
