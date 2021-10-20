import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' exact component={HomePage} />
        <Route path='/detail/:category' component={DetailPage} />
      </Router>
    </div>
  )
}

export default App
