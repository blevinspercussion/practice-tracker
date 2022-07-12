import './App.css';
import AdminPanel from './components/AdminPanel';
import Home from './components/Home';
import Header from './components/Header';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  // Initialize state
  const [dailyPractice, setDailyPractice] = useState([])
  const [shortTermGoals, setShortTermGoals] = useState([])
  const [longTermGoals, setLongTermGoals] = useState([])


  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
