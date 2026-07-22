import './App.css'
import Header from './Components/Header'
import Hero from './Components/Hero'
import JobList from './Components/JobList'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <JobList />
      <Footer />
    </div>
  )
}

export default App