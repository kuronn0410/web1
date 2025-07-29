import React, { useState } from 'react';
import styles from './Header2.module.css';
import { useNavigate } from 'react-router-dom'
import Inputs from '../Inputs/Inputs';

const Header2 = ({title,value, onChange})=>{
  const navigate = useNavigate();
  return (
    <>
    <header className={styles.header}>
      <h1 className={styles['header-title']}>{title}</h1>
      <Inputs 
      value={value}
      onChange = {onChange}
      />
      </header>
    </>
  );
};
export default Header2;
