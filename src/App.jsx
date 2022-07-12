import './App.css';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Goals from './components/Goals';
import DailyPractice from './components/DailyPractice';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  // Initialize state
  const [headings, setHeadings] = useState([]);
  const [dailyPractice, setDailyPractice] = useState([]);
  const [shortTermGoals, setShortTermGoals] = useState([]);
  const [longTermGoals, setLongTermGoals] = useState([]);


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/dailypractice" element={ <DailyPractice /> } />
          <Route path="/goals" element={ <Goals /> } />
          <Route path="/adminpanel" element={ <AdminPanel 
                                                    headings={headings}
                                                    dailyPractice={dailyPractice}
                                                    shortTermGoals={shortTermGoals}
                                                    longTermGoals={longTermGoals}
                                                    /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
