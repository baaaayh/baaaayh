import { useState } from "react";
import Layout from "./Layout";
import ProjectView from "../components/ProjectView";
import projectData from "../project.json";

export default function Project() {
    const [data, setData] = useState(projectData);

    return (
        <Layout>
            <ProjectView data={data} setData={setData} />
        </Layout>
    );
}
