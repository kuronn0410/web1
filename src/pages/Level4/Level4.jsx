import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level4.module.css'; 
import  Header from '../../components/Header/Header.jsx'

const Level4 = () => {
  const navigate = useNavigate()

  //const handleClick = () => {
  //}

  return (
    <div>
      <Header title="レベル４" subtitle="これはヘッダーのサンプルです" />
    <div className={styles.level4Container}>
      {/*@2: 上記のdivタグはimportしているCSSファイル内のlevel2Containerクラス
      のレイアウトがdivで囲っている範囲内全てに反映されるようにしている。
      ちなみにその際、level2Container内には横並びにするコードが書かれているためこの画面ではボタンが横並びで表示される*/}
      <button className={styles.button} onClick={() => {
        navigate('/sausage')

      }}>レベル3へ</button>
      <button className={styles.button} onClick={() =>{
        navigate('/unko')
      }}>レベル5へ</button>

      </div>
    </div>
  )
}

export default Level4