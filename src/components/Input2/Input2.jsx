
import styles from './Input2.module.css';
import { useNavigate } from 'react-router-dom'

const Inputs = ({value, onChange})=>{
  const navigate = useNavigate();
  return (
    <>
      <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="                 入力欄"
          className={styles.input}
      />
      
    </>
  );
};
export default Inputs;
