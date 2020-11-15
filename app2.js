class Header2 extends React.Component {
    render() {
        return (
            <div>
                <h1>Mi Financiapp</h1>
                <h2>Ingresos Mensuales</h2>
            </div>
        )
    }
}

ReactDOM.render(<Header2 />, document.getElementById("header2"));

class Form2 extends React.Component {
    render() {
        return (
            <div>
                <h2>Ingresos Mensuales en peso Mexicano:</h2>
                <form action="ingreso.html">
                    <div>
                        <p>(Sólo introduzca el número, sin signos ni centavos, por ejemplo 5000)</p>
                        <label for="ingresos">Indique sus ingresos mensuales:</label>
                        <input type="number" name="ingresos" id="ingresos" placeholder="Ingresos Mensuales" min="1" required />
                        <button>Aceptar</button>
                    </div>
                </form>
            </div >
        )
    }
}

ReactDOM.render(<Form2 />, document.getElementById("root2"));

class Footer2 extends React.Component {
    render() {
        return (
            <div>
                <p>Copyright 2020: Todos los derechos reservados</p>
                <p>Aviso de privacidad: Su información se mantendrá privada</p>
            </div>
        )
    }
}

ReactDOM.render(<Footer2 />, document.getElementById("footer2"));
