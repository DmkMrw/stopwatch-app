import Button from "./components/Button/Button";
import Container from "./Container/Container";
import Timer from "./components/Timer/Timer"
// import { useState } from "react";
import './styles/global.scss';
import './styles/normalize.scss';
import { useState, useEffect } from "react";


function App() {

  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

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

  let hours = Math.floor((time / (1000 * 60 * 60)) % 24);
  let minutes = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  let seconds = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  let milliseconds = ("0" + ((time / 10) % 100)).slice(-2);

  return (
    <Container>
      <Timer hours={hours} minutes={minutes} seconds={seconds} milliseconds={milliseconds}/>
        <div className="btn">
          <Button onClick={()=>startRunning()}>Start</Button>
          <Button onClick={()=>stopRunning()}>Stop</Button>
          <Button onClick={()=>resetRunning()}>Reset</Button>
        </div>
      </Container>
  );
};

export default App;
