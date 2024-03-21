import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Suppliers } from './components/Suppliers';
import { Products } from './components/Products';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Products />
      <Suppliers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
