import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/home-page'
import AboutPage from '../pages/about-page'
import ServicesPage from '../pages/services-page'
import IndustriesPage from '../pages/industries-page'
import ProjectsPage from '../pages/projects-page'



export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/about" element={< AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
    )
}