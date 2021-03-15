import React, { Fragment, Suspense } from 'react';
import Navbar from './components/UI/Navbar/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home/Home';
import Arac from './components/pages/Arac/Arac';
import Loader from './components/UI/Loaders/SmallLoader/SmallLoader';

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
              <Suspense fallback={<Loader />}>
                <Ticari />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/sahibinden'
            render={() => (
              <Suspense fallback={<Loader />}>
                {' '}
                <Sahibinden />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/motosiklet'
            render={() => (
              <Suspense fallback={<Loader />}>
                <Motosiklet />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/otomobil'
            render={() => (
              <Suspense fallback={<Loader />}>
                <Otomobil />
              </Suspense>
            )}
          />
          <Route
            exact
            path='/galeriler'
            render={() => (
              <Suspense fallback={<Loader />}>
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
