import React, { Fragment, Suspense } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import './flickity.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Arac from './components/pages/Arac/Arac';
// import Galeriler from './components/pages/Galeriler/Galeriler';
// import Otomobil from './components/pages/Otomobil/Otomobil';
// import Motosiklet from './components/pages/Motosiklet/Motosiklet';
// import Sahibinden from './components/pages/Sahibinden/Sahibinden';
// import Ticari from './components/pages/Ticari/Ticari';

const Galeriler = React.lazy(() =>
  import('./components/pages/Galeriler/Galeriler')
);
const Otomobil = React.lazy(() =>
  import('./components/pages/Otomobil/Otomobil')
);

const Motosiklet = React.lazy(() =>
  import('./components/pages/Motosiklet/Motosiklet')
);

const Sahibinden = React.lazy(() =>
  import('./components/pages/Sahibinden/Sahibinden')
);

const Ticari = React.lazy(() => import('./components/pages/Ticari/Ticari'));

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar />
        <Switch>
          <Route
            exact
            path='/ticari'
            render={() => (
              <Suspense fallback={<div>Page Loading...</div>}>
                <Ticari />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/sahibinden'
            render={() => (
              <Suspense fallback={<div>Page Loading</div>}>
                {' '}
                <Sahibinden />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/motosiklet'
            render={() => (
              <Suspense fallback={<div>Page Loading...</div>}>
                <Motosiklet />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/otomobil'
            render={() => (
              <Suspense fallback={<div>Page Loading</div>}>
                <Otomobil />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/galeriler'
            render={() => (
              <Suspense fallback={<div>Page Loading</div>}>
                <Galeriler />
              </Suspense>
            )}
          />
          <Route exact path='/arac/:id' component={Arac} />
          <Route exact path='/' component={Home} />
        </Switch>
      </Router>
    </Fragment>
  );
};

export default App;
