import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Index from './index.jsx'
import Banner1 from './Banner1.jsx'
import Banner2 from './banner2.jsx'
import Footer from './footer.jsx'
import Banner3 from './Banner3.jsx'
import Banner4 from './Banner4.jsx'
import Banner5 from './Banner5.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Index/>
    <Banner1/>
    <Banner2/>
    <Banner3 />
    <Banner4/>
    <Banner5/>
   <Footer/>
    <App />
  </StrictMode>,
)
