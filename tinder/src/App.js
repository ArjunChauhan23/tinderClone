import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import Onboarding from "./pages/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/' element = {<Home/>}/>
        <Route path = '/b' element = {<DashBoard/>}/>
        <Route path = '/reg_page_user' element = {<Onboarding/>}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
