import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level7.module.css'; 
import Footer from '../../components/Footer/Footer.jsx'
import Items from '../../components/Items/Items.jsx'

const Level7 = () => {
  const navigate = useNavigate();
  const itemList = [
    ['A', 'B', 'C'],
    ['D', 'E', 'F']
  ];

  return (
    <>
      <div className={styles.level7Container}>
        <div className={styles.set}>
          <Items items={itemList} />
          
        </div>
        <button className={styles.topbutton} onClick={() => navigate('/onani')}>
          閉じる▲
        </button>
        <div className={styles.buttonRow}>
          <button className={styles.topbutton} onClick={() => navigate('/eghit')}>
            レベル8へ
          </button>
          <button className={styles.imageButton}>画像</button>
        </div>
      </div>

      <Footer title="レベル７" subtitle="これはヘッダーのサンプルです" />
    </>
  );
};

export default Level7;
