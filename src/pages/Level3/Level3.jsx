import { useNavigate } from 'react-router-dom'
import styles from './Level3.module.css'; 

const Level2 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/')  // ← level3 に遷移
  }

  return (
    <div className={styles.level3Container}>
      {/*@2: 上記のdivタグはimportしているCSSファイル内のlevel2Containerクラス
      のレイアウトがdivで囲っている範囲内全てに反映されるようにしている。
      ちなみにその際、level2Container内には横並びにするコードが書かれているためこの画面ではボタンが横並びで表示される*/}
      <button className={styles.button} onClick={handleClick}>レベル4へ</button>
      <button className={styles.button} onClick={handleClick}>レベル4へ</button>
    </div>
  )
}

export default Level2