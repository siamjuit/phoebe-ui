import { Routes, Route } from 'react-router-dom'
import { Layout } from './components/Layout'
import { HomePage } from './pages/HomePage'
import { GettingStartedPage } from './pages/docs/GettingStartedPage'
import { InstallationPage } from './pages/docs/InstallationPage'
import { ComponentsIndexPage } from './pages/components/ComponentsIndexPage'
import { ButtonPage } from './pages/components/ButtonPage'
import { CarouselPage } from './pages/components/CarouselPage'
import { ModalPage } from './pages/components/ModalPage'
import { TooltipPage } from './pages/components/TooltipPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs/getting-started" element={<GettingStartedPage />} />
        <Route path="/docs/installation" element={<InstallationPage />} />
        <Route path="/components" element={<ComponentsIndexPage />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/carousel" element={<CarouselPage />} />
        <Route path="/components/modal" element={<ModalPage />} />
        <Route path="/components/tooltip" element={<TooltipPage />} />
      </Routes>
    </Layout>
  )
}

export default App
