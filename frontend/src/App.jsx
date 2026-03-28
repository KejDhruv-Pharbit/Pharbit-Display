import { Route } from "react-router"
import { Routes } from "react-router"
import Hero from "./Pages/Hero"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Hero/>} />
   </Routes>
  )
}

export default App
