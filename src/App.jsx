import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Celebration from "./pages/Celebration";
import Questions from "./pages/Questions";
import Final from "./pages/Final";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Home />} />

<Route path="/celebrate" element={<Celebration />} />

<Route path="/questions" element={<Questions />} />

<Route path="/final" element={<Final />} />

<Route path="*" element={<Navigate to="/" />} />

</Routes>

</BrowserRouter>

);

}

export default App;