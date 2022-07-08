import './scss/_main.scss';
import ReactDOM from 'react-dom';
import {
  HashRouter,
  Route,
  Routes, 
  Link,
  Switch,
  NavLink,
} from 'react-router-dom';


import Home from './components/home';
import HomeHeader from './components/homeHeader';


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/contact' element={<HomeHeader />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
