import './App.css';
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Cleanings from "./components/Cleanings";
import bootstrap from 'bootstrap/dist/css/bootstrap.css'
import Home from "./components/Home";

function App() {
  return (
    <div>
        <Home/>
        <Cleanings/>
      <Booking/>
    <Footer/>
    </div>
  );
}

export default App;
