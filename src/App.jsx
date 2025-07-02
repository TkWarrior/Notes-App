
import { Route, Routes } from 'react-router'
import './App.css'
import Home from './page/Home/Home'
import Archive from './page/Archive/Archive';

function App() {
 
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/archive" element={<Archive/>}></Route>
      </Routes>
    </>
  );
}

export default App
