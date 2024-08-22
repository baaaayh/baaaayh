import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Layout({ children }) {
    return (
        <div className="wrap">
            <div className="container">
                <Header />
                <div className="content">{children}</div>
                <Footer />
            </div>
        </div>
    );
}
