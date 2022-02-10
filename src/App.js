import Sidebar from'./components/Sidebar'
import "./components/Sidebar.css"
import "./App.css"
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom';
import Html from './pages/Html'
import Javascript from './pages/Javascript';
import Css from './pages/Css';



function App() {
  return (
    <>
      <Router>
       <Sidebar />
       <Routes>
         <Route exact path='/html' element = {<Html />}></Route>
         <Route path='/css' element = {<Css />}></Route>
         <Route path='/javascript' element = {<Javascript />}></Route>
       </Routes>
        
      </Router>
    </>
  );
}

export default App;
