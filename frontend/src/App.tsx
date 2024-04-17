import { BrowserRouter, Route, Routes } from "react-router-dom"
import Signup from "./pages/Signup"
import Signin from "./pages/Signin"
import Blog from "./pages/Blog"
import BlogView from "./pages/BlogView"
import Publish from "./pages/Publish"

function App() {
  return (
    <div className="h-screen w-screen">
<BrowserRouter>
      <Routes>
        
        <Route  path="/signup" element={<Signup/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/blogs" element={<BlogView/>}/>
        <Route path="/blogs/:id" element={<Blog/>}/>
        <Route path="/publish" element={<Publish/>}/>


      </Routes>
    </BrowserRouter>
    </div>
    
  )
}

export default App
