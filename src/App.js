import "./App.css";
import styled from "styled-components";

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
      <div>
        <Button as="a" href="https://utd.edu.mx" primary>
          UTD
        </Button>
        <Button as="a" href="https://github.com/DatCosmi" primary>
          GitHub
        </Button>
        <Button as="a" href="https://www.instagram.com/datcosmi" primary>
          Instagram
        </Button>
      </div>
    </div>
  );
}

export default App;
