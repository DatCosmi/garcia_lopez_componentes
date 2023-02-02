import "./App.css";
import styled from "styled-components";
import Mapa from "./components/Mapa";

const Button = styled.button`
  /* Adapt the colors based on primary prop */
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

function App() {
  return (
    <div className="App">
      <h1>Carlos Iván García López</h1>
      <h2>Práctica Componentes</h2>
      <div className="btn-container">
        <Button as="a" href="https://github.com/DatCosmi">
          GitHub
        </Button>
        <Button as="a" href="https://utd.edu.mx">
          UTD
        </Button>
        <Button as="a" href="https://www.instagram.com/datcosmi">
          Instagram
        </Button>
      </div>
      <h2>Carrusel:</h2>
      <br />
      <div></div>
    </div>
  );
}

export default App;
