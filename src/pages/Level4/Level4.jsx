import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level4.module.css'; 
import  Header from '../../components/Header/Header.jsx'

const Level4 = () => {
  const navigate = useNavigate()
  const items = ['あ', 'い', 'う']; 

  //const handleClick = () => {
  //}

  return (
    <div>
      <Header title="レベル４" subtitle="これはヘッダーのサンプルです" />
      <div className={styles.level4Container}>
        <button className={styles.topbutton} onClick={() => {
          navigate('/sausage')

        }}>レベル3へ</button>
        <button className={styles.bottombutton} onClick={() =>{
          navigate('/unko')
        }}>レベル5へ</button>

        <div className={styles.centerContent}>
        {items.map((items, index) => (
          <div key={index}className={styles.item}>{items}</div>
        ))}
        </div>
      </div>
    </div>
  )
}

export default Level4