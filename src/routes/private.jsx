import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard/pages/dashboard";

function Private() {
    return (
        <>
            <Routes>
                <Route path="/dashboard" element={<><Dashboard /></>} />
            </Routes>
        </>
    );
}

export default Private;