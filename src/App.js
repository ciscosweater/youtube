import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import { ScreenDiv } from './styles';
import { MenuContext } from './contexts/menuContext';

function App() {
  const { openMenu } = useContext(MenuContext);

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div style={{ width: '100%', display: 'flex' }}>
          <Menu />
          <ScreenDiv openMenu={openMenu}>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/library' element={<Library />} />
              <Route path='/history' element={<History />} />
              <Route path='/shorts' element={<Shorts />} />
              <Route path='/subscriptions' element={<Subscriptions />} />
            </Routes>
          </ScreenDiv>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
