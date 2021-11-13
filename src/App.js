import HomePage from './pages/HomePage'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import DetailPage from './pages/DetailPage'
import ContactUs from './pages/ContactUs'
import NavigationBar from './components/NavigationBar'

function App() {
  return (
    <div className='App  overflow-x-hidden'>
      <Router>
        <NavigationBar />
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
