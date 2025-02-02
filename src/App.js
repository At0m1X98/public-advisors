import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Root from './Page/Root';
import Home from './Page/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Root/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
