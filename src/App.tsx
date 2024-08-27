import { Route, Routes } from "react-router-dom"
import Layout from "../components/Layout"
import IndexPage from "./pages/IndexPage"
import "./App.css"
// import About from "./pages/About"
import Contact from "./pages/Contact"
import Projects from "./pages/Projects"
import Work from "./pages/work"
function App() {
  

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<IndexPage/>}/>
        <Route path="/work-with-me" element={<Work/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/projects" element={<Projects/>} />
      </Route>
    </Routes>
    </>
  )
}

export default App
