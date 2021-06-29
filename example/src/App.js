import React from 'react';
import {
  Container, RouterContextProvider, ThemeContextProvider,
} from '@dataesr/react-dsfr';
import {
  BrowserRouter, Route, Switch, Link as RouterLink,
} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Components from './pages/components';
import Couleurs from './pages/couleurs';
import Home from './pages/home';

const App = () => (
  <ThemeContextProvider>
    <BrowserRouter>
      <RouterContextProvider Router={RouterLink}>
        <Header />
        <Container className="content" role="main" spacing="py-6w">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/composants">
              <Components />
            </Route>
            <Route path="/couleurs">
              <Couleurs />
            </Route>
            <Route exact path="/examples">
              <Components />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </RouterContextProvider>
    </BrowserRouter>
  </ThemeContextProvider>
);

export default App;
