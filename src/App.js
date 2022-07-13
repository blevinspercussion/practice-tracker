import './App.css';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Goals from './components/Goals';
import DailyPractice from './components/DailyPractice';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  // Initialize state
  const [headings, setHeadings] = useState([]);
  const [dailyPractice, setDailyPractice] = useState([]);
  const [goals, setGoals] = useState([]);

  // Functions 
  const addHeading = (heading) => {
    setHeadings(headings.concat(heading));
  }

  const addPractice = (heading, title, description, time) => {
    setDailyPractice(dailyPractice.concat(
      {
        heading: heading,
        title: title,
        description: description,
        time: parseInt(time),
      }
    ))
  }

  const addGoal = (type, title, description) => {
    setGoals(goals.concat(
      {
        type: type,
        title: title,
        description: description,
      }
    ))
    console.log(goals);
  }

  const deletePractice = (title) => {
    setDailyPractice(dailyPractice.filter((practice) => practice.title !== title));
  }

  const deleteHeading = (heading) => {
    setDailyPractice(dailyPractice.filter((practice) => practice.heading !== heading));
    setHeadings(headings.filter((text) => heading !== text));
  }

  const deleteGoal = (title) => {
    setGoals(goals.filter((goal) => goal.title !== title));
  }

  const getHeadingTime = (heading) => {
    let time = 0;
    for (let item in dailyPractice) {
        console.log(dailyPractice[item].time);
        if (dailyPractice[item].heading === heading) {
            time += dailyPractice[item].time;
        }
    }
    return time;
}


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/dailypractice" element={ <DailyPractice 
                                                    headings={headings}
                                                    dailyPractice={dailyPractice}
                                                    getHeadingTime={getHeadingTime}
                                                    /> } />
          <Route path="/goals" element={ <Goals goals={goals} /> } />
          <Route path="/adminpanel" element={ <AdminPanel 
                                                    headings={headings}
                                                    dailyPractice={dailyPractice}
                                                    goals={goals}
                                                    addGoal={addGoal}
                                                    addHeading={addHeading}
                                                    addPractice={addPractice}
                                                    deleteHeading={deleteHeading}
                                                    deletePractice={deletePractice}
                                                    deleteGoal={deleteGoal}
                                                    getHeadingTime={getHeadingTime}
                                                    /> } />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
