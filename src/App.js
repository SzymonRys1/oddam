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
import LogIn from './components/logIn';
import Register from './components/register';
import LogOut from './components/logOut';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/logowanie' element={<LogIn />} />
        <Route path='/rejestracja' element={<Register />} />
        <Route path='/wylogowano' element={<LogOut />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
