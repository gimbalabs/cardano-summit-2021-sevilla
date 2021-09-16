import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlask, faHome, faAt } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#"><FontAwesomeIcon icon={faFlask} />GL</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <Link className="nav-link ml-3" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle ml-3" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Programación
                            </a>
                            <div className="dropdown-menu bg-dark" aria-labelledby="navbarDropdown">
                            <Link className="dropdown-item text-white" to="/schedule/saturday">Sábado</Link>
                            <Link className="dropdown-item text-white" to="/schedule/sunday">Domingo</Link>
                            <Link className="dropdown-item text-white" to="/playground">Playground</Link>
                            </div>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link ml-3" to="/about"><FontAwesomeIcon icon={faAt} />Acerca de Cardano</Link>
                        </li>
                    </ul>
                    <Link to="/signup/:testnet"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Testnet Login</button></Link>{' '}
                    <Link to="/signup/:mainnet"><button className="btn btn-outline-success my-2 my-sm-0" type="submit">Mainnet Login</button></Link>
                </div>
            </nav>    
        </div>
    )
}

export default Navbar;
