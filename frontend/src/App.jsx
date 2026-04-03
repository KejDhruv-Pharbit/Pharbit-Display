import { Route } from "react-router"
import { Routes } from "react-router"
import Landing from "./Pages/Landing"
import LoginPage from "./Pages/Auth/Login"

function App() {

  return (
    <Routes>
      <Route path="/" element={<Landing />} />
       <Route path="/Auth" element={<LoginPage/>} />
   </Routes>
  )
}

export default App
