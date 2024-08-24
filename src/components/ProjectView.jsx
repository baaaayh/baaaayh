import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
export default function ProjectView({ ...props }) {
    const id = useParams().id;
    const projectsInfo = props.data.data.projects;
    const info = projectsInfo.filter((item) => Number(id) === item.id)[0];

    return (
        <div className="project-view">
            <div className="project-view__inner">
                <div className="project-view__title">
                    <h2>{info.title}</h2>
                    <div className="project-view__sort">
                        <span>{info.sort}</span>
                    </div>
                </div>
                <figure className="project-view__figure">
                    <img
                        src={`/images/projects/${info.img}`}
                        alt={info.title}
                    />
                </figure>
                <div className="project-view__detail">
                    <ul>
                        <li>
                            <div className="project-view__tit">설명</div>
                            <div className="project-view__desc">
                                {info.desc}
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">URL</div>
                            <div className="project-view__desc">
                                <a href={info.url} target="_blank">
                                    {info.url}
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">URL2</div>
                            <div className="project-view__desc">
                                <a href={info.url2} target="_blank">
                                    {info.url2}
                                </a>
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">작업자</div>
                            <div className="project-view__desc">
                                {info.workers}
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">기간</div>
                            <div className="project-view__desc">
                                {info.period}
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">기여도</div>
                            <div className="project-view__desc">
                                {info.contribution}
                            </div>
                        </li>
                        <li>
                            <div className="project-view__tit">툴</div>
                            <div className="project-view__desc">
                                {info.tools}
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

ProjectView.propTypes = {
    data: PropTypes.shape({
        data: PropTypes.shape({
            projects: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.number.isRequired,
                    desc: PropTypes.string.isRequired,
                    url: PropTypes.string,
                    url2: PropTypes.string,
                    workers: PropTypes.number,
                    period: PropTypes.string,
                    contribution: PropTypes.string,
                    tools: PropTypes.string,
                })
            ).isRequired,
        }).isRequired,
    }).isRequired,
};
