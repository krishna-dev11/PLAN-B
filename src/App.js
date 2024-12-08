import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useEffect, useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import Rtoa from "./components/Rtoa";
import PaymentGateway from "./components/PaymentGateway";
import PaymentGatewayMethod from "./components/PaymentGatewayMethod";
import OrderTracking from "./components/OrderTracking";
import PhonePeUI from "./components/PhonePeUI";
import Leftright from "./components/Leftright";
import MedicalGarden from "./components/MedicalGarden";


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
 

  return (
    <div className="w-screen   flex flex-col  background"  >
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn}/>} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
        } />
        <Route path="/rtoa-section" element={<Rtoa/>}/>
        <Route path="/paymentgatway" element={<PaymentGateway/>}/>
        <Route path="/paymentgatwaymethod" element={<PaymentGatewayMethod/>}/>
        <Route path="/ordertracking" element={<OrderTracking/>}/>
        <Route path="/Qrsection"  element={<PhonePeUI/>}/>
        <Route path="/MedicalGarden"  element={<MedicalGarden/>} />
      </Routes>

    </div>
    )
}

export default App;




// import { Route, Routes, useNavigate } from "react-router-dom";
// import { useEffect, useState } from 'react';
// import "./App.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Dashboard from "./pages/Dashboard";
// import PrivateRoute from "./components/PrivateRoute";
// import Rtoa from "./components/Rtoa";
// import PaymentGateway from "./components/PaymentGateway";
// import PaymentGatewayMethod from "./components/PaymentGatewayMethod";
// import OrderTracking from "./components/OrderTracking";
// import PhonePeUI from "./components/PhonePeUI";

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const [showHome, setShowHome] = useState(true); // Home dikhane ke liye state
//   const navigate = useNavigate(); // Navigation ke liye hook

//   useEffect(() => {
//     // Timer lagaya gaya hai jo 2 seconds ke baad `/login` route par redirect karega
//     const timer = setTimeout(() => {
//       setShowHome(false);
//       navigate("/login");
//     }, 2000);

//     return () => clearTimeout(timer); // Cleanup function
//   }, [navigate]);

//   return (
//     <div className="w-screen flex flex-col background">
//       <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

//       <Routes>
//         {/* Home sirf tab dikhayega jab `showHome` true hoga */}
//         {showHome && <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />}
//         <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
//         <Route path="/dashboard" element={
//           <PrivateRoute isLoggedIn={isLoggedIn}>
//             <Dashboard />
//           </PrivateRoute>
//         } />
//         <Route path="/rtoa-section" element={<Rtoa />} />
//         <Route path="/paymentgatway" element={<PaymentGateway />} />
//         <Route path="/paymentgatwaymethod" element={<PaymentGatewayMethod />} />
//         <Route path="/ordertracking" element={<OrderTracking />} />
//         <Route path="/Qrsection" element={<PhonePeUI />} />
//       </Routes>
//     </div>
//   );
// }

// export default App;
