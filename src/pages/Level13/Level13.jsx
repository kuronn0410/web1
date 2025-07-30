import { useNavigate } from 'react-router-dom'
import styles from './Level13.module.css';
import { useState } from 'react';
import Button2 from '../../components/Button2/Button2.jsx'
import Inputs from '@/components/Inputs/Inputs';

const Level13 = () => {
  const navigate = useNavigate();
  const [inputLevel13, setInputLevel13] = useState("");
  const [storedValue, setStoredValue] = useState(""); // ← 取得した値を保存するステート

  // 保存処理
  const handleSave = () => {
    localStorage.setItem("level13Value", inputLevel13);
    alert("ローカルストレージに保存しました！");
  };

  // 取得処理
  const handleGet = () => {
    const value = localStorage.getItem("level13Value");
    if (value) {
      setStoredValue(value); // ← ステートに保存
    } else {
      alert("ローカルストレージに値がありません。");
      setStoredValue(""); // ← 表示しないようにクリア
    }
  };

  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.txtsenter}>
          ローカルストレージに<br />
          保存させたい値を<br />
          入力して下さい
        </h1>
      </header>
      <div className={styles.level13Container}>
        <Inputs
          value={inputLevel13}
          onChange={setInputLevel13}
        />
        <button className={styles.buttonin} onClick={handleSave}>
          ローカルストレージに保存する
        </button>
        <button className={styles.buttonget} onClick={handleGet}>
          ローカルストレージの値を<br />
          取得して表示する
        </button>

        {/* 取得された値がある場合だけ表示 */}
        {storedValue && (
          <p className={styles.valueDisplay}>
            表示する値：{storedValue}
          </p>
        )}

        <Button2
          button2={'レベル１４'}
          path={'/fourteen'}
        />
      </div>
    </>
  );
};

export default Level13;
