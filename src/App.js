import { Routes, Route } from "react-router-dom";
import WebNav from "./components/navbar/WebNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Thanks from "./pages/Thanks";

function App() {
    return (
        <>
            <WebNav />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/flights" element={<Home />} />
                <Route path="/trains" element={<Home />} />
                <Route path="/bus" element={<Home />} />
                <Route path="/cabs" element={<Home />} />
                <Route path="/thanks" element={<Thanks />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;
