import { Route } from "react-router"
import { Routes } from "react-router"
import Landing from "./Pages/Landing"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing/>} />
   </Routes>
  )
}

export default App
