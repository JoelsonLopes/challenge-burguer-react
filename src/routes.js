import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import AllOrders from "./containers/Orders";

function MyRoutes() {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="AllOrders" element={<AllOrders />} />          
            </Routes>
        </Router>
    )

}
export default MyRoutes;