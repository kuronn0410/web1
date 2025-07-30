import styles from './Level12.module.css'; 
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useState } from 'react';


const Level12 = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const level12Value = location.state?.level12;

  const [inputs, setInputs] = useState([]);
  const handleAddInput = () => {
    setInputs((prev) => [...prev, '']);
  };
  const handleInputChange = (index, value) => {
    setInputs((prev) => {
      const newInputs = [...prev];
      newInputs[index] = value;
      return newInputs;
    });
  };
  const handleRemoveInput = (index) => {
  setInputs((prev) => prev.filter((_, i) => i !== index));
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
            <div key={idx} className={styles.inputGroup}>
              <input
                key={idx}
                type="text"
                value={value}
                onChange={(e) => handleInputChange(idx, e.target.value)}
                className={styles.dynamicInput}
                placeholder={`入力${idx + 1}`}
              />
              <button
              onClick={() => handleRemoveInput(idx)}
              className={styles.removeButton}
              >
              削除
              </button>
            </div>
          ))}
        </div>
         <p>現在の入力欄数: {inputs.length}</p>
        <button
          className={styles.toLevel13Button}
          onClick={() => {
          localStorage.setItem('level12Inputs', JSON.stringify(inputs));
          navigate('/thirteen');
          }}
        >
          レベル１３へ
        </button>
      </div>
    </>
  );
};

export default Level12;
