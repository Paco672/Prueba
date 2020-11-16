class Header3 extends React.Component {
    render() {
        return (
            <div>
                <h1>Mi Financiapp</h1>
                <h2>Introduce tus Gastos</h2>
            </div>
        )
    }
}

ReactDOM.render(<Header3 />, document.getElementById("header3"));

class Form3 extends React.Component {
    render() {
        return (
            <div id="formx">
                <h2>Selecciona la cantidad y categoría del gasto:</h2>
                <form action="categoriasg.html">
                    <div>
                        <label for="monto">Indica Monto del gasto:</label>
                        <input type="number" name="monto" id="monto" min="1" requirede></input>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="transporte" required />
                        <label for="transporte">Gastos de transporte</label>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="vivienda" required />
                        <label for="vivienda">Gastos de Vivienda</label>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="ocio" required />
                        <label for="ocio">Gastos de Ocio/Esparcimiento</label>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="Alimentos" required />
                        <label for="Alimentos">Gastos de Alimentos</label>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="Escuela" required />
                        <label for="Escuela">Gastos de Escuela/Estudios</label>
                    </div>
                    <div>
                        <input type="radio" name="gastos" id="otros" required />
                        <label for="otros">Otros</label>

                    </div>
                    <button>Aceptar</button>
                    <button>Crear Nueva Categoría</button>
                </form>

            </div >
        )
    }
}

ReactDOM.render(<Form3 />, document.getElementById("root3"));

class Footer3 extends React.Component {
    render() {
        return (
            <div>
                <p>Copyright 2020: Todos los derechos reservados</p>
                <p>Aviso de privacidad: Su información se mantendrá privada</p>
            </div>
        )
    }
}

ReactDOM.render(<Footer3 />, document.getElementById("footer3"));