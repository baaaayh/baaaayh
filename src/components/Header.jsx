import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <header className="header">
            <div className="header__inner">
                <h1 className="header__logo">
                    <a href="./">김&nbsp;&nbsp;주&nbsp;&nbsp;형</a>
                </h1>
                <div className="gnb" id="gnb">
                    <ul>
                        <li>
                            <Link to="/intro">소개</Link>
                        </li>
                        <li>
                            <Link to="/side">사이드 프로젝트</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
