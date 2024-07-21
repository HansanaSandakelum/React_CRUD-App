import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import Users from "./Users";
import CreateUser from "./CreateUser";
import UpdateUser from "./UpdateUser";
function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}></Route>
        <Route path="/create" element={<CreateUser/>}></Route>
        <Route path="/update" element={<UpdateUser/>}></Route>
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
