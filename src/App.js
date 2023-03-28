import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Library from "./pages/library";
import History from "./pages/history";
import Shorts from "./pages/shorts";
import Subscriptions from "./pages/subscriptions";
import UploadVideo from "./pages/upload";
import { ScreenDiv } from './styles';
import { MenuContext } from './contexts/menuContext';
import { UserStorage } from './contexts/userContext';
import Login from './pages/login';
import SignUpPage from './pages/signup';
import { VideoStorage } from './contexts/videoContext';

function App() {
  const { openMenu } = useContext(MenuContext);

  return (
    <UserStorage>
      <VideoStorage>
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
                  <Route path='/login' element={<Login />} />
                  <Route path='/signup' element={<SignUpPage />} />
                  <Route path='/upload' element={<UploadVideo />} />
                </Routes>
              </ScreenDiv>
            </div>
          </div>
        </BrowserRouter>
      </VideoStorage>
    </UserStorage>
  );
}

export default App;
