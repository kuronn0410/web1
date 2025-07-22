import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level6.module.css'; 
import  Header from '../../components/Header/Header.jsx'
import  Footer from '../../components/Footer/Footer.jsx'
import  Items from '../../components/Items/Items.jsx'


const Level6 = () => {
  const navigate = useNavigate()
  const itemList1 = ['あ', 'い'];
  const itemList2 = ['１個', '２個', '３個'];
  const itemList3 = ['ま', 'み', 'む', 'め'];
  const itemList4 = ['A', 'B', 'C'];

  return (
    <div>
      <Header title="レベル６" subtitle="これはヘッダーのサンプルです" />
      <div className={styles.level6Container}>
        <button className={styles.topbutton} onClick={() => {
          navigate('/unko')
        }}>レベル5へ</button>
        <button className={styles.bottombutton} onClick={() =>{
          navigate('/ntr')
        }}>レベル7へ</button>
        <div className={styles.set}>
          <Items items={itemList1} />
          <Items items={itemList2} />
        </div>
        <div className={styles.set}>
          <Items items={itemList3} />
          <Items items={itemList4} />
        </div>
      </div>
      <Footer title="レベル６" subtitle="これはヘッダーのサンプルです" />
    </div>
  )
}

export default Level6