import './App.css';
import Footer from "./components/pages/Footer";
import Booking from "./components/pages/Booking";
import Cleanings from "./components/pages/Cleanings";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/pages/Home";
import { useRef } from 'react';

function App() {
  const bookRef = useRef(null);
  return (
    <div>
        <Home bookRef={bookRef}/>
        <Cleanings bookRef={bookRef} />
      <Booking bookRef={bookRef}/>
    <Footer/>
    </div>
  );
}

export default App;
