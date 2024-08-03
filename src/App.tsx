import './App.css'
import Career from './components/career'
import Education from './components/education'
import MainBanner from './components/main-banner'
import Projects from './components/projects'

function App() {

  return (
    <>
      {/* <img src="dark-logo.png" width={250} height={50} alt="Logo" /> */}
      <main className="bg-black pt-10">
        <MainBanner/>
        <Projects/>
        <Education/>
        <Career/>
      </main>
    </>
  )
}

export default App
