import React from "react";

import styles from "./ErrorAlert.module.css";

type Props = {
  errorText: string;
};

export const ErrorAlert: React.FC<Props> = ({ errorText }) => {
  return (
    <div className={styles.screen}>
      <span className={styles.errorText}>{errorText}</span>
    </div>
  );
};
