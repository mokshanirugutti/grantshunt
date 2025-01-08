import './App.css'
import { BrowserRouter, Routes, Route } from "react-router";
import Layout from './Layout';
import Homepage from './home/Homepage';
function App() {
  

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
        </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
