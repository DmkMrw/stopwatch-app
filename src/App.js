import Button from "./components/Button/Button";
import Container from "./Container/Container";
import Timer from "./components/Timer/Timer"
import './styles/global.scss';
import './styles/normalize.scss';
import { useState, useEffect } from "react";


function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(null);

    useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!running) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
    }, [running]);

  const startRunning = () => {
    setRunning(true)
  }

  const stopRunning = () => {
    setRunning(false)
  }

  const resetRunning = () => {
    setTime(0);
    setRunning(false)
  }

  return (
    <Container>
      <Timer timer={time}/>
        <div className="btn">
          <Button onClick={()=>startRunning()}>Start</Button>
          <Button onClick={()=>stopRunning()}>Stop</Button>
          <Button onClick={()=>resetRunning()}>Reset</Button>
        </div>
      </Container>
  );
};

export default App;
