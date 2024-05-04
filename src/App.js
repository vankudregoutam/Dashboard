import './App.css';
import Consultant from './components/Consultant';
import DashBoard from './components/DashBoard';
import NavBar from './components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import Table from './components/Table';

function App() {
  return (
    <>
      <Router>
        <NavBar />
        <DashBoard />
        <Consultant />
        <Table />
      </Router>
    </>
  );
}

export default App;
