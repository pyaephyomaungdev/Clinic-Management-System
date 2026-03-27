import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Features from './components/Features.jsx';
import Footer from './components/Footer.jsx';
import PatientRecords from './components/PatientRecords.jsx';
import Billing from './components/Billing.jsx';
import Contact from './components/Contact.jsx';
import Login from './components/Login.jsx';

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className="min-h-screen font-sans text-slate-900 antialiased flex flex-col">
      {!isLoginPage && <Navbar />}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<><Hero /><Features /></>} />
          <Route path="/login" element={<Login />} />
          <Route path="/records" element={<PatientRecords />} />
          <Route path="/billing" element={<Billing />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isLoginPage && <Footer />}
    </div>
  );
}

export default App;