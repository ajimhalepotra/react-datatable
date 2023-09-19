import Navigation from "./Pages/Navigation"; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home'
import About from './Pages/About'
import StudentData from './components/Table'
import AddStudent from './components/AddTableData'
import Contact from './Pages/Contact'
import Page404 from "./Pages/Page404";

function App() {
  return (
    <BrowserRouter>
    <Navigation />
      <Routes>
      <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/student-data" element={<StudentData />} />
            <Route path="/add-student" element={<AddStudent />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
