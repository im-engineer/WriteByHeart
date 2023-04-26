import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './pages/main/Main'
import Publish from './component/Publish/Publish';
import LandingPage from './component/Landing/LandingPage';
import Profile from './component/Profile/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/landingPage" element={<LandingPage/>}/>
        <Route path="/publish" exact element={<Publish/>} />
        <Route path='profile' element={<Profile/>}/>
      </Routes>
    </div>
  );
}

export default App;
