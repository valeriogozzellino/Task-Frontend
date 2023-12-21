import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
function App() {

  return (
      
        <BrowserRouter>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<h1>Page not found</h1>} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
