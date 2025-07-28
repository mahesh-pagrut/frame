import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import VideoRoom from './pages/Video/VideoRoom'

function App() {


  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/room/:roomID' element={<VideoRoom/>} />
    </Routes>
  )
}

export default App
