import './App.css';
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import Login from './pages/LoginPage/Login';
import ForgotPassword from './pages//ForgetPassword/ForgetPassword';
import ResetByEmail from './pages/ResetEmail/ResetByEmail';
import CreateNewPassword from './pages/CreateNewPassword/CreateNewPassword';
import ResetByPhone from './pages/ResetPhone/ResetByPhone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-by-email" element={<ResetByEmail />} />
        <Route path="/reset-by-phone" element={<ResetByPhone />} />
        <Route path="/reset-password" element={<CreateNewPassword />} />
      </Routes>
    </Router>
  );
}

export default App;
