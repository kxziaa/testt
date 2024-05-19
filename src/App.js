import {Routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Iklan from './pages/Iklan';

function App() {

  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/iklan' element={<Iklan/>} />

    </Routes>
    </>
  );
}

export default App;