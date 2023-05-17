import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/Login';
import Chat from './components/chat/Chat';
import Profile from './components/profile/Profile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={Login} />
        <Route path="/chat" component={Chat} />
        <Route path="/profile" component={Profile} />
      </Routes>
    </Router>
  );
};

export default App;
