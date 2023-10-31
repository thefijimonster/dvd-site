import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import WorkPage from './Components/WorkPage';
import AboutPage from './Components/AboutPage';
import ContactPage from './Components/ContagePage';
import StorePage from './Components/StorePage';

// WORK COMPONENTS
import GLLRY from './Components/GLLRY';
import BSCPBRGHT from './Components/BSCPBRGHT';
import MSCVIDS from './Components/MSCVIDS';
import OBGTRCDS from './Components/OBGTRCDS';
import SNDSCPE from './Components/SNDSCPE';
import SPKRDSGN from './Components/SPKRDSGN';
import STEMPLYR from './Components/STEMPLYR';
import TRVPRNTS from './Components/TRVPRNTS';
import ARCHIVE from './Components/ARCHIVE'

const root = ReactDOM.createRoot(document.getElementById('root'));

  root.render((
    <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={ <WorkPage/> }>
        </Route>
        <Route path="/ABOUT" element={ <AboutPage/> }>
        </Route>
        <Route path="/STORE" element={ <StorePage/> }>
        </Route>
        {/* <Route path="/WORK" element={ <WorkPage/> }>
        </Route> */}
        <Route path="/CONTACT" element={ <ContactPage/> }>
        </Route>
        {/* WORK PAGES */}
        <Route path="/BSCPBRGHT" element={ <BSCPBRGHT/> }>
        </Route>
        <Route path="/ARCHIVE" element={ <ARCHIVE/> }>
        </Route>
        <Route path="/MSCVIDS" element={ <MSCVIDS/> }>
        </Route>
        <Route path="/OBGTRCDS" element={ <OBGTRCDS/> }>
        </Route>
        <Route path="/SNDSCPE" element={ <SNDSCPE/> }>
        </Route>
        <Route path="/SPKRDSGN" element={ <SPKRDSGN/> }>
        </Route>
        <Route path="/STEMPLYR" element={ <STEMPLYR/> }>
        </Route>
        <Route path="/TRVPRNTS" element={ <TRVPRNTS/> }>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
  ))

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
