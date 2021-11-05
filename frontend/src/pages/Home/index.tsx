import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-4">DSVendas</h1>
                    <p className="lead">Analise o desempenho de suas vendas por diferentes perspectivas</p>
                    <hr />
                    <p>Esta explicação consiste em exibir um Dashboard a partir de dados fornecidos por um backend construído com Spring Boot</p>
                    <Link className="btn btn-primary btn-lg" to="/dashboard">
                        Acessar Dashboard                       
                    </Link>
                </div>
            </div>
            <Footer />
        </>

    );
}

export default Home;