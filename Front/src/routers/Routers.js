import { BrowserRouter, Routes, Route } from "react-router-dom";
import EndPage from "../pages/endPage";
import Home from "../pages/Home";

const Routers = () => {

    return <BrowserRouter>
        <Routes>
            <Route index element={<Home />} />
            <Route path="/end-order" element={<EndPage />} />
        </Routes>
    </BrowserRouter>
}

export default Routers;