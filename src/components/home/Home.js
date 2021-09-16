import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="container-fluid p-5">
            <div className="row">
                <div className="col-12 col-md-4 mt-4 p-lg-3">
                    <h1>¡Bienvenido al Cardano Summit 2021!</h1>
                    <p class="mission">Nuestra misión: ver las charlas.</p>
                    <p>Lore lore macu macu!</p>
                </div>
                <div className="col-12 col-md-7 mt-4 ml-md-5 p-lg-3">
                    <h1>Información relevante:</h1>
                    <p class="mission">Accede a la programación </p>
                    <p class="mission">
                         Over the next few months, we will continue to release APIs and Starter Kits that provide entry points for learning about and building upon what Cardano can do. 
                    </p>
                    <div class="card m-lg-3">
                        <h5 class="card-header">"Mintea" tu propio IDNFT en Cardano!</h5>
                        <div class="card-body">
                            <p class="card-text">
                                Si quieres un recuerdo del evento, puedes crear un wallet (¡incluso desde tu móvil!) y mintear tú mismo un NFT en Cardano.
                                En Cardano no necesitas SmartContracts, así que sí, es tan fácil como crear una wallet y enviarte una transacción a ti mismo.
                                Además, este NFT te servirá como forma de acceso al area de usuarios de esta web. Adios a las contraseñas, el futuro es "passwordless", ¡usa tu wallet para identificarte!
                            </p>
                            <p class="card-text">Todo esto es además posible desde el navegador de tu móvil gracias a wallets web como <a href="https://gamechanger.finance" >GameChanger.</a> Que por cierto, ¡está desarrollada con mucho amor desde Argentina! </p>
                            <p class="card-text">Si quieres probar a mintear el token usando este wallet, pulsa el botón para la red correspondiente. Pero ojó, ¡necesitarás ADA de verdad para hacerlo en Mainnet! </p>
                            <Link to="/signup/testnet" class="btn btn-primary m-2">Testnet SignUp</Link>
                            <Link to="/signup/mainnet" class="btn btn-primary m-2">Mainnet SignUp</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;
