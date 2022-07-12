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

  // Functions 
  const addHeading = (heading) => {
    setHeadings(headings.concat(heading));
  }

  const addPractice= (heading, title, description, time) => {
    setDailyPractice(dailyPractice.concat(
      {
        heading: heading,
        title: title,
        description: description,
        time: time,
      }
    ))
    console.log(dailyPractice);
  }


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
                                                    addHeading={addHeading}
                                                    addPractice={addPractice}
                                                    /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
