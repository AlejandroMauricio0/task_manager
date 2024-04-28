import { Route, Routes } from "react-router-dom";
import Login from "../pages/auth/login";
import Register from "../pages/auth/register";
import Private from "./private";

function Public() {
    return (
        <Routes>
            <Route path='/' element={<><Login /></>} />
            <Route path='/register' element={<><Register /></>} />
            <Route path='/user/*' element={<><Private /></>} />
        </Routes>
    );
}

export default Public;