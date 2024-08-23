import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import Introduce from "./pages/Intro";
import SideProject from "./pages/SideProject";
import "./assets/scss/App.scss";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
export default function App() {
    const firebaseConfig = {
        apiKey: "AIzaSyCqjVjuoszsdxWZduZaZrbQJIaZf-hExsc",
        authDomain: "portfolio-d7e92.firebaseapp.com",
        projectId: "portfolio-d7e92",
        storageBucket: "portfolio-d7e92.appspot.com",
        messagingSenderId: "998557955650",
        appId: "1:998557955650:web:b97fa3e74eb41bf4f11fdb",
        measurementId: "G-Z8YXCN54MZ",
    };

    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

    return (
        <Routes>
            <Route path="/" element={<Main />} exact="true" />
            <Route path="/project/:id" element={<Project />} />
            <Route path="/intro" element={<Introduce />} />
            <Route path="/side" element={<SideProject />} />
        </Routes>
    );
}
