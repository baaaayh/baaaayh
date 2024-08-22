import { useState } from 'react';
import ProjectItem from './ProjectItem';

export default function ProjectList({ ...props }) {
    const projects = props.projects.data.projects;
    return (
        <div className="project">
            <ul>
                {projects &&
                    projects.map((item, index) => {
                        return <ProjectItem info={item} />;
                    })}
            </ul>
        </div>
    );
}
