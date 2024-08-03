
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Header from './components/Header/Header';
import Home from './pages/home/Home';



function App() {
  return (
    <>
     <BrowserRouter>
    <Header/>
    {/* <Home /> */}
     <Routes>
      
     </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
