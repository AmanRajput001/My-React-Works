import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogIn from './LogIn.jsx';
import SignIn from './SignIn.jsx';

function App() {
  return (
    <Router>
        <div>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
        </div>
    </Router>
  );
}

export default App;
