import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Root from './components/layout/Root'
import Client from './pages/Client'
import PrivacyPolicy from './pages/PrivacyPolicy'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Root/>}>
          <Route index element={<Client/>}/>
        </Route>
        <Route path='/privacy' element={<PrivacyPolicy/>}/>
      </Routes>
    </Router>
  )
}

export default App
