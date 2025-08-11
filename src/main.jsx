import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { HashRouter } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie'

createRoot(document.getElementById('root')).render(
    <HashRouter>
        {/* <BrowserRouter> */}
            <CookiesProvider>
                <App />
            </CookiesProvider>
    {/* </BrowserRouter> */}
    </HashRouter>
)
