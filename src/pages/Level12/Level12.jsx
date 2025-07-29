import { useNavigate } from 'react-router-dom'
import styles from './Level12.module.css'; 
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import Button2 from '../../components/Button2/Button2.jsx'


const Level12 = () => {
  const navigate = useNavigate();

  const location = useLocation();
  const level12Value = location.state?.level12;
  const [inputs, setInputs] = useState([]);
  const handleAddInput = () => {
    setInputs((prev) => [...prev, '']); // 空の入力欄を1つ追加
  };

   const handleInputChange = (index, value) => {
    setInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      return newInputs;
    });
  };

  return (
    <>
    <header className={styles.header}>
    <h1>レベル10で入力した数値</h1>
      <p className={styles.valueDisplay}>
        入力値：{level12Value}
      </p>
    </header>
      <div className={styles.level12Container}>
        <button className={styles.addbutton}
        onClick={handleAddInput}>
         入力欄追加
        </button>
        <h1 className={styles.txtsenter}>
            レベル１４で表示させたい<br />
            数値群を入力してください
        </h1>
        <div className={styles.inputsWrapper}>
          {inputs.map((value, idx) => (
            <input
              key={idx}
              type="text"
              value={value}
              onChange={(e) => handleInputChange(idx, e.target.value)}
              className={styles.dynamicInput}
              placeholder={`入力${idx + 1}`}
            />
          ))}
        </div>
         <p>現在の入力欄数: {inputs.length}</p>
        <Button2
        button2={'レベル１３'}
        path={'/eleven'}
        />
      </div>
    </>
  );
};

export default Level12;
