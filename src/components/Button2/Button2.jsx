import React from 'react';
import { useNavigate } from 'react-router-dom'; // 追加
import styles from './Button2.module.css';

const Button2 = ({ button2,path }) =>{
    const navigate = useNavigate(); 

    return (
        <div className={styles.set}>
            <button className={styles.topbutton} onClick={() => navigate(path)}>
                {button2}
            </button>
        </div>
    );
};
export default Button2;