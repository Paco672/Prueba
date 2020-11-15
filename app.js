class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>Mi Financiapp</h1>
                <h2>Inicio de Sesión</h2>
            </div>
        )
    }
}

ReactDOM.render(<Header />, document.getElementById("header"));

class Form extends React.Component {
    render() {
        return (
            <div>
                <h2>Ingresa tu información para Iniciar Sesión:</h2>
                <form action="categorias.html">
                    <div>
                        <label for="username">Nombre de Usuario:</label>
                        <input type="text" name="username" id="username" minlength="5" maxlength="30" placeholder="Nombre de usuario" required />
                    </div>
                    <div>
                        <label for="password">Contraseña:</label>
                        <input type="password" name="password" id="password" minlength="8" placeholder="Contraseña" required />
                    </div>
                    <div>
                        <label for="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="Dirección Email" required />
                    </div>
                    <br></br>
                    <button>Iniciar Sesión</button>
                </form>
            </div>
        )
    }
}

ReactDOM.render(<Form />, document.getElementById("root"));

class Footer extends React.Component {
    render() {
        return (
            <div>
                <p>Copyright 2020: Todos los derechos reservados</p>
                <p>Producido en colaboración con la Universidad de Guadalajara</p>
            </div>
        )
    }
}

ReactDOM.render(<Footer />, document.getElementById("footer"));

