import React from 'react';
import { useNavigate } from 'react-router-dom'
import styles from './Level8.module.css'; 
import Buttons from '../../components/Button/Button.jsx'
import Button2 from '../../components/Button2/Button2.jsx'


const Level8 = () => {
  const navigate = useNavigate();
  const ButtonList1 = [
   'レベル１','レベル２','レベル３'
  ];
  const Buttonkye1 = [
    '/', '/sex', '/sausage'
  ];
  const ButtonList2 = [
   'レベル４','レベル５'
  ];
  const Buttonkye2 = [
    '/awabi', '/unko', 
  ];
  const ButtonList3 = [
   'レベル６','レベル７','レベル９'
  ];
  const Buttonkye3 = [
   '/onani','/ntr', '/nine'
  ];
  

  return (
    <>
      <div className={styles.level8Container}>
          <Button2
          button2={'レベル８'}
          path= {'/eghit'}/>
          <Buttons 
          buttonnamus={ButtonList1}
          paths ={Buttonkye1} />
          <Buttons 
          buttonnamus={ButtonList2}
          paths ={Buttonkye2} />
          <Buttons 
          buttonnamus={ButtonList3}
          paths ={Buttonkye3} />
      </div>
    </>
  );
};

export default Level8;
