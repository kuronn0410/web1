import { useNavigate } from 'react-router-dom'
import styles from './Level11.module.css'; 
import { useState, useEffect } from 'react';
import Button3 from '../../components/Button3/Button3.jsx'
import { useLocation } from 'react-router-dom';

const Level11 = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const level12Value = location.state?.level12;

  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    },1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div className={styles.level11Container}>
          <h1 className={styles.txtsenter}>
            このページを開いてから<br />
          </h1>
            <span className={styles.seconds}>{seconds}</span>
          <h1 >秒経ちました</h1>
          <Button3
          button3={'レベル１２へ'}
          onClick={() => navigate('/twelve', { state: {level12: level12Value } })}/>
      </div>
    </>
  );
};

export default Level11;
