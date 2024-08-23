import PropTypes from "prop-types";
import ProjectItem from "./ProjectItem";

export default function ProjectList({ ...props }) {
    const projects = props && props.projects.data.projects;

    return (
        <div className="project">
            <ul>
                {projects &&
                    projects.map((item) => {
                        return <ProjectItem info={item} key={item.id} />;
                    })}
            </ul>
        </div>
    );
}

ProjectList.propTypes = {
    projects: PropTypes.shape({
        data: PropTypes.shape({
            projects: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.oneOfType([
                        PropTypes.string,
                        PropTypes.number,
                    ]).isRequired,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};
