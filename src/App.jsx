import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Introduce from "./pages/Intro";
import SideProject from "./pages/SideProject";
import "./assets/scss/App.scss";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Main />} exact="true" />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/intro" element={<Introduce />} />
            <Route path="/side" element={<SideProject />} />
        </Routes>
    );
}
