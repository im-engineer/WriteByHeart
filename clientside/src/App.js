import './App.css';
import { Route, Routes } from "react-router-dom";
import Main from './pages/main/Main'
import Publish from './component/Publish/Publish';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/publish" exact element={<Publish/>} />
      </Routes>
    </div>
  );
}

export default App;
