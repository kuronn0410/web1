import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level3.module.css'; 
import  Header from '@/components/Header/Header.jsx'

const Level3 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/awabi')  // ← level3 に遷移
  }

  return (
    <div>
      <Header title="レベル３" subtitle="これはヘッダーのサンプルです" />
    <div className={styles.level3Container}>
      {/*@2: 上記のdivタグはimportしているCSSファイル内のlevel2Containerクラス
      のレイアウトがdivで囲っている範囲内全てに反映されるようにしている。
      ちなみにその際、level2Container内には横並びにするコードが書かれているためこの画面ではボタンが横並びで表示される*/}
      <button className={styles.button} onClick={handleClick}>レベル4へ</button>
      <button className={styles.button} onClick={handleClick}>レベル4へ</button>
      </div>
    </div>
  )
}

export default Level3