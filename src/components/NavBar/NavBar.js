import React from 'react';

function NavBar({setActiveComponent}) {
    return (
        <nav>
            <ul>
                <li><button onClick={() => setActiveComponent("home")}>Home</button></li>
                <li><button onClick={() => setActiveComponent("livros")}>Livros</button></li>
                <li><button onClick={() => setActiveComponent("cadastrar")}>Cadastrar</button></li>
            </ul>
        </nav>
    )
}

export default NavBar;