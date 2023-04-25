import './App.css';
import Landingpage from './component/LandingPage/Landingpage';
import { Route, Routes } from "react-router-dom";
import Signin from "./component/SignIn/Signin"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landingpage/>}/>
        <Route path='/signin' element={<Signin/>}/>
      </Routes>
    </div>
  );
}

export default App;
