import { Route, Routes } from "react-router";

import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home/Home";
import "./styles/main.scss";
import About from "./pages/About/About";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
}

export default App;
