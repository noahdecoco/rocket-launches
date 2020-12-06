import React from "react";

import globalStyles from "../../Styles/GlobalStyles.module.css";
import styles from "./Loader.module.css";

type Props = {
  "data-testid": string;
};

export const Loader: React.FC<Props> = ({ "data-testid": dataTestId }) => {
  return (
    <div className={globalStyles.screen} data-testid={dataTestId}>
      <span className={styles.loadingText}>Loading...</span>
    </div>
  );
};
