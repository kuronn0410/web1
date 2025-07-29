import React from 'react';
import { useNavigate } from 'react-router-dom'; // 追加
import styles from './Button.module.css';

const Buttons = ({ buttonnamus,paths }) =>{
    const navigate = useNavigate(); 

    return (
        <div className={styles.buttonVer}>
            { buttonnamus.map((name,index)=>(
                <button
                    key={index}
                    className={styles.topbutton}
                    onClick={() => navigate(paths[index])}
                >
                    {name}
                </button>
            ))}
        </div>
    );
};
export default Buttons;