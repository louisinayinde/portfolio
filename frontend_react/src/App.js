import React from "react";

import { About, Footer, Headers, Skills, Testimonials, Work} from './container';
import { Navbar} from './components';
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Navbar />
           <Headers />
           <About />
           <Work />
           <Skills />
           <Testimonials />
           <Footer />
        </div>
    );
}

export default App;