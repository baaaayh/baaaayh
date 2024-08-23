import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function ProjectItem({ info }) {
    return (
        <li className="project__item" key={info.id}>
            <Link to={`/project/${info.id}`}>
                <figure className="project__figure">
                    <img
                        src={`/images/projects/${info.img}`}
                        alt={info.title}
                    />
                </figure>
                <div className="project__title">
                    <h3>{info.title}</h3>
                    <p>{info.tools}</p>
                </div>
            </Link>
        </li>
    );
}

ProjectItem.propTypes = {
    info: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
        img: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        tools: PropTypes.string,
    }).isRequired,
};
