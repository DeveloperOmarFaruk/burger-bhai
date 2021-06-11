import {
  BrowserRouter as Router,

} from 'react-router-dom';
import './App.css'
import Footer from './Components/Footer/Footer'
import Navbar from './Components/Navbar/Navbar';
import ScrollButton from './Components/ScrollButton/ScrollButton';


function App() {
    return ( 
      <Router>
        <Navbar/>
      <ScrollButton/>
      <Footer/>
      </Router>
    );
    }
      export default App;
      
