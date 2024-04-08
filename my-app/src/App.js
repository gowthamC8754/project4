import React from 'react';
import SignupPage from "./SignUpPage ";
import LoginPage from "./LoginPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
      <div className="App">
        <Routes> {/* Changed Switch to Routes */}
          <Route path="/" element={<LoginPage />} /> {/* Use element prop instead of component */}
          <Route path="/signup" element={<SignupPage />} /> {/* Use element prop instead of component */}
        </Routes>
      </div>
    </Router>
  </div>
);
}


    
export default App;
