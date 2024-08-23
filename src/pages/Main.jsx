import { useEffect, useState } from "react";
import Layout from "./Layout";
import KeyVisual from "../components/KeyVisual";
import ProjectList from "../components/ProjectList";
import projectData from "../project.json";

export default function Main() {
    const [data, setData] = useState(projectData);

    useEffect(() => {
        setData(projectData);
    }, []);

    return (
        <Layout>
            <>
                <KeyVisual />
                <ProjectList projects={data} />
            </>
        </Layout>
    );
}
