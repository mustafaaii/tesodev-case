import { Routes, Route } from "react-router-dom";
import AddNew from "../pages/add";
import Detail from "../pages/detail";
import Home from "../pages/home";



const Routers = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:title" element={<Detail />} />
                <Route path="/new" element={<AddNew />} />
            </Routes>
        </>
    )
}
export default Routers;