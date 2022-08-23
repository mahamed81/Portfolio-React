import { Routes, Route, Router} from "react-router-dom";
import './App.scss';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ContactPage from './pages/ContactPage';



function App() {
  return (
    <div className="App">
        <Header/>
   
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="about" element={<AboutPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
    </div>
  );
}

export default App;
