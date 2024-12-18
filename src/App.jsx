import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Header from './Header'; 
import Cover from './cover'; 
import About_us from './about_us';
import Services from './Services';
import Rev from './Rev';
import Cases from './Cases';
import Contacts from './Contacts';
import Fotter from './Fotter';
import Samsung from './samsung'; 


function Layout() {
  return (
    <div>
      <Header /> 
      <Cover /> 
      <About_us />
      <Services />
      <Rev />
      <Cases />
      <Contacts />

    </div>
  );
}

function App() {
  return (
    <Router basename='/SMM_Agency_Mobile'>
      <div className="App">
        <Routes>
          {/* Для главной страницы и всех страниц с общим содержимым */}
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/about-us" element={<About_us />} />
            <Route path="/services" element={<Services />} />
            <Route path="/rev" element={<Rev />} />
            <Route path="/cases" element={<Cases />} />
            <Route path="/contacts" element={<Contacts />} />
          </Route>

          
          <Route path="/samsung" element={<Samsung />} />
        </Routes>

       

        <Fotter />
      </div>
    </Router>
  );
}

function Home() {
  return (

    <div>

    </div>
  );
}

export default App;



