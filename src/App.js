import './App.css';
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Cleanings from "./components/Cleanings";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./components/Home";
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
