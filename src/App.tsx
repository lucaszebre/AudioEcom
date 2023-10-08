import Home from './pages/Home'
import Speakers from './pages/speakers'
import Earsphones from './pages/earsphones'
import Headphones from './pages/headPhones'
import HeadphonesMark from './pages/headPhonesMark'
import HeadphonesMark2 from './pages/headPhomesMark2'
import XX59 from './pages/xx59'
import ZX7 from './pages/zx7'
import ZX9 from './pages/zx9'
import YX1 from './pages/yx1'
import Checkout from './pages/checkout'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Auth from './components/auth'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Toaster } from "@/components/ui/toaster"

function App() {

  const queryClient = new QueryClient()

  return (
    
    
    <QueryClientProvider client={queryClient}>
    <Toaster />
    <HashRouter basename='/'> 
     
      <Routes>
        <Route  path="/" element={<Home />}/>
        <Route  path="/auth" element={<Auth />}/>
        <Route  path="/headphones" element={<Headphones />}/>
        <Route  path="/speakers" element={<Speakers />}/>
        <Route  path="/XX99MarkIHeadphones" element={<HeadphonesMark />}/>
        <Route  path="/XX99MarkIIHeadphones" element={<HeadphonesMark2 />}/>
        <Route  path="/XX59Headphones" element={<XX59 />}/>
        <Route  path="/ZX7Speaker" element={<ZX7 />}/>
        <Route  path="/ZX9Speaker" element={<ZX9 />}/>
        <Route  path="/YX1Earphones" element={<YX1 />}/>
        <Route  path="/earsphones" element={<Earsphones/>}/>
        <Route path="/checkout" element={<Checkout/>}/>
      </Routes>
    </HashRouter> 
    
    </QueryClientProvider>

  )
}

export default App
