import { Link } from 'react-router-dom';

export default function ProjectItem({ ...props }) {
    const info = props.info;
    return (
        <li className="project__item" key={info.id}>
            <Link to={`/project/${info.id}`}>
                <figure className="project__figure">
                    <img src={`/src/assets/images/projects/${info.img}`} alt="" />
                </figure>
                <div className="project__title">
                    <h3>{info.title}</h3>
                    <p>{info.tools}</p>
                </div>
            </Link>
        </li>
    );
}
