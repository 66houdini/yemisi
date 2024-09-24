import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import IndexPage from "./pages/IndexPage"
import "./App.css"
// import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Work from "./pages/work"
import Consultation from "./pages/Consultation"
import Coach from "./pages/Coach"
import About from "./pages/About"
import Media from "./pages/Media"
import Certifications from "./pages/Certifications"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/work-with-me" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/consulting" element={<Consultation/>} />
        <Route path="/coaching" element={<Coach/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/media" element={<Media/>} />
        <Route path="/certifications" element={<Certifications/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
