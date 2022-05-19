import Button from "./components/Button/Button";
import Container from "./Container/Container";
import Timer from "./components/Timer/Timer"
import './styles/global.scss';
import './styles/normalize.scss';


function App() {
  return (
    <Container>
        <Timer/>
        <div className="btn">
          <Button>Start</Button>
          <Button>Stop</Button>
          <Button>Reset</Button>
        </div>
      </Container>
  );
}

export default App;
