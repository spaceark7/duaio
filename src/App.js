import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import ContactUs from './pages/ContactUs'

function App() {
  return (
    <div className='App relative overflow-x-hidden'>
      <Router>
        <nav className='fixed top-0 h-16 w-full'></nav>
        <main>
          <Route path='/' exact component={HomePage} />
          <Route path='/detail/:category' component={DetailPage} />
          <Route path='/contact-us' component={ContactUs} />
        </main>
      </Router>
    </div>
  )
}

export default App
