import { Route, Routes, BrowserRouter } from "react-router-dom";
import Team from './components/TeamPage/Team';
import Admin from './components/AdminPage/Admin';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Team/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;