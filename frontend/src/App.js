import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom'
import BodyClass from './components/Body Class/BodyClass';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Sidebar from './components/Sidebar/Sidebar';
import Login from './pages/login/Login';

function App() {
  return (
    <>
    <Router>
      <Routes>
          <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
