import styles from './Timer.module.scss';


const Timer = ({hours, minutes, seconds, milliseconds}) => {

     return (

          <div className={styles.timer}>
               <h1>{hours}:{minutes}:{seconds}:{milliseconds}</h1>
          </div>

     );
}

export default Timer;