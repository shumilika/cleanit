import './App.css';
import Footer from "./components/Footer";
import Booking from "./components/Booking";
import Cleanings from "./components/Cleanings";
import bootstrap from 'bootstrap/dist/css/bootstrap.css'

function App() {
  return (
    <div>
        <Cleanings/>
      <Booking/>
    <Footer/>
    </div>
  );
}

export default App;
