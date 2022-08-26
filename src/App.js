import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import MeetTheTeam from "./components/MeetTheTeam";
import FindanAgent from './components/FindanAgent';

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/meettheteam" element={<MeetTheTeam />} />
      <Route path="/findanagent" element={<FindanAgent />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
