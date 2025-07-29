import { useNavigate } from 'react-router-dom'
import styles from './Level10.module.css'; 
import Button3 from '../../components/Button3/Button3.jsx'
import Inputs from '../../components/Inputs/Inputs';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Level10 = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const inputValue = location.state?.value;
  const [inputLevel12, setInputLevel12] = useState("");
  return (
    <>
    <header className={styles.header}>
    <h1>レベル９で入力した数値</h1>
      <p className={styles.valueDisplay}>
        入力値：{inputValue}
      </p>
    </header>
      <div className={styles.level10Container}>
          <h1 className={styles.txtsenter}>
            レベル１２で表示させたい<br />
            数値を入力してください
          </h1>
          <Inputs 
          inputs={inputLevel12}
          onChange={setInputLevel12}
          />
          <Button3
          button3={'レベル１１へ'}
          onClick= {() => navigate('/eleven', 
          { state: {level12: inputLevel12, } })}
          />
      </div>
    </>
  );
};

export default Level10;
