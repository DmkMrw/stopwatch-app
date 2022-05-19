import styles from './Timer.module.scss';


const Timer = ({hours, minutes, seconds, miliseconds}) => {

     return (

          <div className={styles.timer}>
               <h1>{hours}:{minutes}:{seconds}:{miliseconds}</h1>
          </div>

     );
}

export default Timer;