import { React } from "react";
import { Routes, Route, } from "react-router-dom";
import Login from "./LogIn";
import Notes from "./Notes";



function App () {
  return(
<div className = "App">
      <div>
    <Routes>
      <Route path= '/' element={<Login />}exact />
      <Route path= '/notes' element={<Notes />}exact />
    </Routes>
      </div>
</div>
  ) 
}
export default App;