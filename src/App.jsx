import './App.css';
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages';
import ContactPage from './pages/contact';
import './assets/fonts.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/contact" element={<ContactPage />} exact />
      </Routes>
    </Router>
  );
}

export default App;