
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './page/Home/Home'
import Archive from './page/Archive/Archive';
import Important from './page/Important/Important';
import Bin from './page/Bin/Bin';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archive" element={<Archive />}></Route>
        <Route path="/important" element={<Important/>}></Route>
        <Route path="/bin" element={<Bin/>}></Route>
        
      </Routes>
    </>
  );
}

export default App
