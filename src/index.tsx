import React from 'react'
import { createRoot } from 'react-dom/client'
import { HelmetProvider } from 'react-helmet-async'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom'

import './style.css'
import FAQ from './views/faq'
import HomeV1 from './views/home-v1'
import PrivacyPolicy from './views/privacy-policy'
import HomeV2 from './views/home-v2'
import SpotlightTemplate from './views/spotlight-template'
import HomeV3 from './views/home-v3'
import Home from './views/home'
import TermsOfService from './views/terms-of-service'
import NotFound from './views/not-found'

const RouteDebugger: React.FC = () => {
  const location = useLocation();
  console.log('Current route:', location.pathname);
  return null;
};

const App: React.FC = () => {
  console.log('App component rendering')
  return (
    <>
      <RouteDebugger />
      <Routes>
        <Route path="/faq" element={<FAQ />} />
        <Route path="/home-v1" element={<HomeV1 />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/home-v2" element={<HomeV2 />} />
        <Route path="/spotlight-template" element={<SpotlightTemplate />} />
        <Route path="/home-v3" element={<HomeV3 />} />
        <Route path="/" element={<Home />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

console.log('Starting app mount')
const container = document.getElementById('app')
console.log('Found container:', container)

if (!container) {
  throw new Error('Failed to find the root element')
} else {
  console.log('Creating root and rendering app')
  const root = createRoot(container)
  root.render(
    <React.StrictMode>
      <Router>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </Router>
    </React.StrictMode>
  )
}

export {} 