import './App.css';



function App() {
  return (
    <div className="App">
      <div className="Header">
        <h1>My Financiapp</h1>
        <h2>Inicio de Sesión</h2>
      </div>
      <div className="Form">
        <h2>Ingresa tu información para Iniciar Sesión:</h2>
        <form action="categorias.html">
          <div>
            <label for="username">Nombre de Usuario:</label>
            <input type="text" name="username" id="username" minlength="5" maxlength="20" required />
          </div>
          <div>
            <label for="password">Contraseña:</label>
            <input type="password" name="password" id="password" minlength="8" required />
          </div>
          <div>
            <label for="email">Email:</label>
            <input type="email" name="email" id="email" required />
          </div>
          <br></br>
          <button>Iniciar Sesión</button>
        </form>
      </div>
      <div className="Footer">
        <p>Copyright: Todos los derechos reservados</p>
        <p>Elaborado en colaboración UdeG</p>
      </div>
    </div>
  );
}


export default App;

//http://localhost:3000 /
