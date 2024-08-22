import { useParams } from 'react-router-dom';
export default function ProjectView({ ...props }) {
    const id = useParams().id;
    const projectsInfo = props.data.data.projects;
    const info = projectsInfo.filter((item, index) => Number(id) === item.id)[0];
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
                    <img src={`/src/assets/images/projects/${info.img}`} alt="" />
                </figure>
                <div className="project-view__detail">
                    <ul>
                        <li>
                            <div className="project-view__tit">설명</div>
                            <div className="project-view__desc">{info.desc}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">URL</div>
                            <div className="project-view__desc">{info.url}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">URL2</div>
                            <div className="project-view__desc">{info.url2}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">작업자</div>
                            <div className="project-view__desc">{info.workers}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">기간</div>
                            <div className="project-view__desc">{info.period}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">기여도</div>
                            <div className="project-view__desc">{info.contribution}</div>
                        </li>
                        <li>
                            <div className="project-view__tit">툴</div>
                            <div className="project-view__desc">{info.tools}</div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
