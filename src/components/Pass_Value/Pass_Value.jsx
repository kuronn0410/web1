import styles from './Pass_Value.module.css';
import { useNavigate } from 'react-router-dom'
import Inputs from '../Inputs/Inputs';
import Button3 from '../Button3/Button3';
import React, { useState } from 'react';

const Pass_Value = ({ buttonnames }) =>{
    const navigate = useNavigate();
    const [inputValue, setInputValue] = useState("");
    return (
        <>
          <Inputs 
          inputs={inputLevel12}
          onChange={setInputValue}
          />
        </>
    );
};
export default Pass_Value;