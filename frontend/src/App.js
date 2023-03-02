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
        {/* <BodyClass bodyClass="hold-transition login-page"> */}
          <Route path="/login" element={<Login />}/>
        {/* </BodyClass> */}
      </Routes>
    </Router>
    </>
  );
}

export default App;
