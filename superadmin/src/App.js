import './App.css';
import { Route, Routes } from "react-router-dom";
import Signin from "./component/SignIn/Signin"
import Navbar from './component/Navbar/Navbar';
import { useSelector } from 'react-redux';
import Sidebar from './component/Sidebar/Sidebar';

function App() {
  const user = useSelector((state) => state.auth);
  return (
    <div className="App">
    <Navbar />
    {user.isLoggedIn ? (
      <div>
        <Sidebar />
        <Routes>
          <Route path="/signin" element={<Signin />}></Route>
        </Routes>
      </div>
    ) : (
      <div>
        <Routes></Routes>
      </div>
    )}
    <Routes>
      <Route path="/signin" element={<Signin />}></Route>
    </Routes>
  </div>
  );
}

export default App;
