import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import Header from './components/Header/Header';
import LifeCyclePage from './pages/LifeCyclePage/LifeCyclePage';

function App() {
  return (
    <div >
      {/* react-router */}
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/life-cycle' element={<LifeCyclePage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
