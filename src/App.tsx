import { Outlet } from 'react-router-dom';
import './App.css';
import MobileNav from './components/MobileNav';

function App() {
  return (
    <div className='app-wrapper'>
      <div className='app-container'>
        <MobileNav />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
