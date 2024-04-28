import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './output.css'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/auth/login'
import Public from './routes/public'
import Private from './routes/private'
import Dashboard from '../src/pages/dashboard/pages/dashboard'
import '../src/assets/style.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>

        <Route path='/*' element={<Public />} />
        <Route path='/*' element={<Public />} />
        {/* <Route path='/*' element={<><Dashboard/></>} /> */}
        {/* <Route path='/user/*' element={<><Private /></>} /> */}
      </Routes>
    </>
  )
}

export default App
