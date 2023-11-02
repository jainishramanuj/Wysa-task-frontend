import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import WelcomePage from "./pages/WelcomePage";
import ProblemSelectionPage from './pages/ProblemSelectionPage';
import PastSelectionPage from './pages/PastSelectionPage';
import SleepScorePage from './pages/SleepScorePage';
import TimeSelectionPage from './pages/TimeSelectionPage';
import LogIn from './components/LogIn';
import SignUp from './components/SignUp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<LogIn/>}/>
        <Route path="/" element={<><Navbar/><WelcomePage/><Footer/></>}/>
        <Route path="/problem-selection" element={<><Navbar/><ProblemSelectionPage /><Footer/></>}/>
        <Route path="/past-selection" element={<><Navbar/><PastSelectionPage/><Footer/></>}/>
        <Route path="/time-selection" element={<><Navbar/><TimeSelectionPage/><Footer/></>}/>
        <Route path="/sleep-score" element={<><Navbar/><SleepScorePage/><Footer/></>}/>
        {/* <Route path="*" element={<LogIn/>}/> */}
        {/* { isAuthenticated && <Route path="/" element={<WelcomePage/>}/> } */}
        {/* <Route path="/problem-selection" element={<Protected Component={ProblemSelectionPage}/>}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
