import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import { Outlet } from 'react-router-dom'; //this is used to load all routes defined in the index/main.jsx
function App() {
    return (
        <>
            <Header />
            <main className="py-3">
                <Container>
                    <Outlet />
                </Container>
            </main>
            <Footer />
        </>
    );
}

export default App;
