import react,{ useContext , useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { About } from "../pages/About";
import Books from "../pages/Books";
import { EditBookData } from "../pages/EditBookData";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Logout } from "../pages/Logout";
import { Navbar } from "../pages/Navbar";
import { SingleBook } from "../pages/SingleBook";
import { RequiredAuth } from "./RequiredAuth";
import { AuthContext, AuthContextProvider } from "../context/AuthContext";

const Mainroutes = () => {
  // const {token} = useContext(AuthContext);
  // const navigate = useNavigate();  
  // useEffect(()=>{
  //   if(!token){
  //     navigate("/login");
  //   }else{
  //     navigate("/");
  //   }
  // },[token])
  return (
    <>
      <Navbar />
      <Routes>
       {/* keep all the routes here  */}
       <Route path="/" element={<Home/>}/>
       <Route path="/about" element={<About/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/books" element={<Books/>}/>
        <Route path="/books/:id" element={<SingleBook/>}/>
       <Route path="/login" element={<Login/>}/>
       <Route path="/logout" element={<Logout/>}/>
       <Route path="/requiredauth" element={<RequiredAuth/>}/>
       {/* /books/* route need to be protected */}
      </Routes>
    </>
  );
};
export default Mainroutes;
