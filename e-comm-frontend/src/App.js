import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import LoginPage from './pages/LoginPage';

import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
              <Route path="/" component={HomePage} exact />
              <Route path="/product/:id" component={ProductPage} />
              <Route path="/login" component={LoginPage} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
