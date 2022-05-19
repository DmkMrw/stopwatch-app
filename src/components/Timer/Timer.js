import styles from './Timer.module.scss';

const Timer = ({ timer }) => {
     let hours = Math.floor((timer / (1000 * 60 * 60)) % 24);
     let minutes = ("0" + Math.floor((timer / 60000) % 60)).slice(-2);
     let seconds = ("0" + Math.floor((timer / 1000) % 60)).slice(-2);
     let milliseconds = ("0" + ((timer / 10) % 100)).slice(-2);



     return (

          <div className={styles.timer}>
               <div className={styles.time}><h1>{hours}:{minutes}:{seconds}:{milliseconds}</h1></div>
          </div>

     );
}

export default Timer;