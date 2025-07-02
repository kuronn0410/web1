import { useNavigate } from 'react-router-dom'//@1:npm install react-router-domが必要
import styles from './Level1.module.css' //@1:CSSをインポート(画面の表示デザインをこの中で定めている)

//@1:下記はLevel1という名前のコンポーネントを示す
const Level1 = () => {
  const navigate = useNavigate()//@1:ページ遷移に必要なnavigateをコンポーネント内に作成している
  
  //@1:下記はhandleClickという名前の関数をコンポーネント内で宣言している
  const handleClick = () => {
    navigate('/sex')
  }

  return (
    <div className={styles.level1Container}>
      {/*@1:上記はimportしているCSSファイル内のlevel1Containerクラスのレイアウトがdivで囲っている範囲内全てに反映されるようにしている*/}
      <button className={styles.button} onClick={handleClick}>レベル2へ</button>
      {/*@1:上記はレベル2へというボタンを押した際に宣言したhandleClickという名前の関数が起動されるようにしている*/}
    </div>
  )
}

//@1:下記はLevel1という名前のコンポーネントを外部ファイルからも呼び出せるようにしている
export default Level1