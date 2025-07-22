import React from 'react';
import styles from './Items.module.css';

const Items = ({ items }) => {
  // 列方向（共通インデックス）に走査して、各列要素を結合
  const combined = items[0].map((_, i) => items.map(row => row[i]).join(''));

  return (
    <div className={styles.centerContent}>
      {combined.map((item, index) => (
        <div key={index} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default Items;
