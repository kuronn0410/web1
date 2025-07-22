import React from 'react';
import styles from './Items.module.css';
    
const Items = ({ items }) => {
  return (
    <div className={styles.centerContent}>
            {items.map((items, index) => (
              <div key={index}className={styles.item}>
                {items}
              </div>
            ))}
    </div>
  )
}
export default Items;