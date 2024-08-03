import './App.css'
import Career from './components/career'
import Education from './components/education'
import MainBanner from './components/main-banner'
import Projects from './components/projects'
import WebLoader from './components/web-loader'

function App() {
  // Hello
  return (
    <>
      {/* <img src="dark-logo.png" width={250} height={50} alt="Logo" /> */}
      <main className="bg-black pt-10"> 
        <WebLoader/>
        <MainBanner/>
        <Projects/>
        <Education/>
        <Career/>
      </main>
    </>
  )
}

export default App
