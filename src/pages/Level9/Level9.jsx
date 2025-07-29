import { useNavigate } from 'react-router-dom'
import styles from './Level9.module.css'; 
import Button3 from '../../components/Button3/Button3.jsx'
import Header2 from '../../components/Header2/Header2.jsx'
import React, { useState } from 'react';

const Level9 = () => {
  const navigate = useNavigate();
   const [inputValue, setInputValue] = useState("");

  const handleSubmit = () => {
    navigate('/eghit', { state: { value: inputValue } }); // useLocationで取得可
  };
  return (
    <>
    <Header2 
    title="レベル10の画面に表示させたい数値を入力しよう！！"
    value ={inputValue}
    onChange={setInputValue}
    />
      <div className={styles.level9Container}>
          <button className={styles.buttonclose} onClick={() => navigate('/onani')}>
            閉じる▲
          </button>
          <Button3
          button3={'レベル１０'}
          onClick={() => navigate('/ten', { state: { value: inputValue } })}
          />
      </div>
    </>
  );
};

export default Level9;
