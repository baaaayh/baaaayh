import { useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Header() {
    const header = useRef(null);
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    useEffect(() => {
        const $header = header.current;
        window.addEventListener("scroll", function () {
            const st =
                document.documentElement.scrollTop || document.body.scrollTop;
            st > 0
                ? $header.classList.add("active")
                : $header.classList.remove("active");
        });
    }, []);

    return (
        <header ref={header} className="header">
            <div className="header__inner">
                <h1 className="header__logo">
                    <a href="../">김&nbsp;&nbsp;주&nbsp;&nbsp;형</a>
                </h1>
                <div className="gnb" id="gnb">
                    <ul>
                        <li className={isActive("/intro") ? "active" : null}>
                            <Link to="/intro">소개</Link>
                        </li>
                        <li className={isActive("/side") ? "active" : null}>
                            <Link to="/side">사이드 프로젝트</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
