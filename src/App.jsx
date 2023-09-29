import { Route, Routes } from 'react-router-dom'
import './App.css'

import companiesJSON from './companies.json'
import technologiesJSON from './technologies.json'
import CompanyPage from './pages/CompanyPage'
import TechnologyPage from './pages/TechnologyPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage companies={companiesJSON} />} />
        <Route path='/company/:companySlug' element={<CompanyPage companies={companiesJSON} />} />
        <Route path='/tech/:slug' element={<TechnologyPage technologies={technologiesJSON} />} />

        <Route path='*' element={<h1>404 Page</h1>} />
      </Routes>
    </div>
  )
}

export default App
