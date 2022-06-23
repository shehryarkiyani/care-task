
import './App.css';
import {Routes,Route} from "react-router-dom"
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
function App() {
 
  return (
    <div className="App">
     <Routes>

      <Route path="/" exact element={<Home/>}/>
      <Route path="/dashboard" exact element={ <Dashboard/>}/>
     </Routes>
    </div>
  );
}

export default App;
