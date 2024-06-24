import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import PlayNow from "./pages/PlayNow";
import ErrorPage from "./pages/ErrorPage";

function App() {
  return (
    <>
      <header className="App">
        <h1>Malevolent Kitchen</h1>
        <img id="TrimbleLogo" src="https://companieslogo.com/img/orig/TRMB-f6434f42.png" width="50px" height="50px"/>
      </header>
      <div className="Route">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
              <Route index element={<Home/>}/>
              <Route path="playnow" element={<PlayNow/>}/>
              <Route path="*" element={<ErrorPage/>}/>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;