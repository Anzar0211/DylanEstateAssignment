import AddProperty from "./pages/AddPropertyDetails/AddProperty"
import Greetings from "./pages/Greetings"
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
        <Route path="/greetings" element={
          <div>
            <Greetings/>
          </div>
        }/>

      </Routes>
    </BrowserRouter>
  )
}
export default App