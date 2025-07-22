import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level5.module.css'; 
import  Header from '../../components/Header/Header.jsx'
import  Footer from '../../components/Footer/Footer.jsx'

const Level5 = () => {
  const navigate = useNavigate()
  const items = [
  ['あ', 'い', 'う'],
  ['え', 'お', 'か']
]; 

  return (
    <div>
      <Header title="レベル５" subtitle="これはヘッダーのサンプルです" />
      <div className={styles.level5Container}>
        <button className={styles.topbutton} onClick={() => {
          navigate('/sausage')
        }}>レベル4へ</button>
        <button className={styles.bottombutton} onClick={() =>{
          navigate('/onani')
        }}>レベル6へ</button>

        <div className={styles.centerContent}>
          {items.map((row, rowIndex) => (
            <div key={rowIndex}className={styles.row}>
            {row.map((item, index) => (
              <div key={index}className={styles.item}>{item}</div>
              ))}
              </div>
            ))}
        </div>
          
      </div>
      <Footer title="レベル５" subtitle="これはヘッダーのサンプルです" />
    </div>
  )
}

export default Level5