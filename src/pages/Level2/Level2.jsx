import { useNavigate } from 'react-router-dom'
import styles from './Level2.module.css'; 

const Level2 = () => {
  const navigate = useNavigate()

  const handleClick = () => {
    console.log("あああああ")
    navigate('/sausage')  // ← level3 に遷移
  }

  return (
    <div className={styles.level2Container}>
      {/*@2: 上記のdivタグはimportしているCSSファイル内のlevel2Containerクラス
      のレイアウトがdivで囲っている範囲内全てに反映されるようにしている。
      ちなみにその際、level2Container内には横並びにするコードが書かれているためこの画面ではボタンが横並びで表示される*/}
      <button className={styles.button} onClick={handleClick}>レベル3へ</button>
      <button className={styles.button} onClick={handleClick}>レベル3へ</button>
    </div>
  )
}

export default Level2