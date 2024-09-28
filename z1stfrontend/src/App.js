// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// // import Home from "../pages/Home/Home";
// // import Home from '../pages/Home/Home.js'
// // import Home from "../pages/Home/Home.js";
// import Home from "./pages/Home/Home.js";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home/>} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Layouts/Header";
// import Home from "../pages/Home/Home";

import Home from './pages/Homes/Home'


function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<Home />}>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;