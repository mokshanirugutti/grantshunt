import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout';
import Homepage from '@/pages/home/Homepage';
import RegisterPage from '@/pages/register/RegisterPage';
import SearchPage from './pages/search/SearchPage';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path='/search' element={<SearchPage/>}/>
        </Route>
        <Route path='/register' element={<RegisterPage />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default App
