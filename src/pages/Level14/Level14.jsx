import { useNavigate } from 'react-router-dom'
import styles from './Level14.module.css'; 
import { useEffect, useState } from 'react';
import Button2 from '../../components/Button2/Button2.jsx';

const Level14 = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState([]);
  // localStorageからデータ取得
  useEffect(() => {
    const savedInputs = localStorage.getItem('level12Inputs');
    if (savedInputs) {
      setInputs(JSON.parse(savedInputs));
    }
  }, []);

  return (
    <>
      <header className={styles.header}>
        <h1>レベル12で入力した数値群</h1>
      </header>
      <div className={styles.level14Container}>
        <ul className={styles.inputsDisplay}>
          {inputs.map((value, idx) => (
            <li className={styles.valueDisplay} key={idx}>
              入力値：
              {value}
            </li>
          ))}
        </ul>

        <Button2 button2={'レベル１３'} path={'/thirteen'} />
      </div>
    </>
  );
};

export default Level14;
