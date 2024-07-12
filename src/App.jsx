import AddProperty from "./pages/AddPropertyDetails/AddProperty"
import Index from "./pages/home/Index"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <Index/>
          </div>
        }/>
        <Route path="/addProperty" element={
          <div>
            <AddProperty/>
          </div>
        }/>
      </Routes>
    </BrowserRouter>
  )
}
export default App