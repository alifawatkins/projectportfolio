import {Route,Routes} from 'react-router-dom';
import About from './About';
import Contact from './Contact';
import Portfolio from './Portfolio';
import Footer from "./Footer";

function Main(){
    return(
        <div>
            <Routes>
                <Route path="/" element={<About />}/>
                <Route path="/about" element={<About />}/>
                <Route path="/portfolio" element={<Portfolio />}/>
                <Route path="/contact" element={<Contact />}/>
            </Routes>
            <Footer />
        </div>
    );
}

export default Main;