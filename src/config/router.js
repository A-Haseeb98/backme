import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "../page/index"

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;