import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Admin from './pages/Admin';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import FaqService from './services/FaqService';

function App() {
  const [faqs, setFaqs] = useState([]);
  const [changeCount, setChangeCount] = useState(0);

  useEffect(() => {
    FaqService.getAllFaqs(setFaqs);
  }, [changeCount])

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home
          faqs={faqs}
        />} />
        <Route path="/admin" element={<Admin
          faqs={faqs}
          setFaqs={setFaqs}
          changeCount={changeCount}
          setChangeCount={setChangeCount}
        />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
