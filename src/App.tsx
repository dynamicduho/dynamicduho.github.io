import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import BlogHome from './pages/BlogHome'
import ProjectsHome from './pages/ProjectsHome'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/blog' element={<BlogHome/>} />
      <Route path="/projects" element={<ProjectsHome/>}/>
    </Routes>
    </>
  )
}

export default App
