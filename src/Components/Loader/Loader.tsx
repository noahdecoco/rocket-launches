import React from "react";

import styles from "./Loader.module.css";

export const Loader: React.FC = () => {
  return (
    <div className={styles.screen}>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};
