import React from "react";

import styles from "./Loader.module.css";

type Props = {
  "data-testid": string;
};

export const Loader: React.FC<Props> = ({ "data-testid": dataTestId }) => {
  return (
    <div className={styles.screen} data-testid={dataTestId}>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};
