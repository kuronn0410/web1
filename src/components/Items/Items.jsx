import React from 'react';
import styles from './Items.module.css';

const Items = ({ items }) => {
  return (
    <div className={styles.itemContainer}>
      {items.map((column, colIndex) => (
        <div key={colIndex} className={styles.column}>
          {Array.isArray(column) && column.map((item, itemIndex) => (
            <button key={itemIndex} className={styles.itemButton}>
              {item}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Items;
