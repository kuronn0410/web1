import React from 'react';
import { useNavigate } from 'react-router-dom'; // 追加
import styles from './Button3.module.css';

const Button3 = ({ button3,onClick }) =>{
    const navigate = useNavigate(); 

    return (
        <div className={styles.set}>
            <button className={styles.topbutton} onClick={onClick}>
                {button3}
            </button>
        </div>
    );
};
export default Button3;