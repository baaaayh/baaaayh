export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__inner">
                <span className="footer__url">
                    baaaayh@gmail.com / https://github.com/baaaayh
                </span>
                <ul className="footer__list">
                    <li className="footer__item footer__item--github">
                        <a
                            target="_blank"
                            href="https://github.com/baaaayh"
                            className="icon_github"
                        >
                            Github
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
