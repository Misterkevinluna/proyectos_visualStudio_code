import '../../assets/css/style/header.css';
import { DarkModeSwitch } from '../DarkModeSwitch';

const Header = () => {
    return(
        <>
            <header className="header">
                <div className="logo">
                    <h2 className="titulo">Kevin Luna</h2>
                    <p className="subtitulo">Desarrollador Web & Freelance</p>
                </div>
                <div className="navbar">
                    <a href="#trabajos">Trabajos</a>
                    <a href="#acerca-de">Acerca de</a>
                    <a href="#contacto">Contacto</a>
                </div>
                <DarkModeSwitch />
            </header>
        </>
    );
};

export {Header};