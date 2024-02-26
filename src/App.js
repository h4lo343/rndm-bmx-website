import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  useLocation,
} from 'react-router-dom';
import styled from 'styled-components';
import { createContext, useState } from 'react';
import { pageRoutes } from './components/pages/handlers/pageRoutes';
import { CartButton } from './components/common/cartButton';

export const ThemeContext = createContext();

function App() {
  const [isOpen, setOpen] = useState(false);
  return (
    <Router>
      <ThemeContext.Provider value={{ isOpen, setOpen }}>
        <AppContainer className="App">
          <Switch>
            {pageRoutes.map((page) => (
              <Route
                exact
                key={page.key}
                path={page.pathname}
                component={page.component}
              />
            ))}
          </Switch>
          <CartButton />
        </AppContainer>
      </ThemeContext.Provider>
    </Router>
  );
}

export default App;

const AppContainer = styled.div``;
