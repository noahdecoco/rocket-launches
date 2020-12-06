import React from "react";

import styles from "./ErrorAlert.module.css";

type Props = {
  "data-testid": string;
  errorText: string;
};

export const ErrorAlert: React.FC<Props> = ({
  errorText,
  "data-testid": testId,
}) => {
  return (
    <div data-testid={testId} className={styles.screen}>
      <span className={styles.errorText}>{errorText}</span>
    </div>
  );
};
