import React from "react";

import styles from "./App.module.css";
import { LaunchResponseData, useFetchLaunches } from "./Hooks/useFetchLaunches";

function App() {
  const launches: LaunchResponseData | null = useFetchLaunches();

  return (
    <div className="app">
      <header className={styles.appHeader}>
        <h1 className={styles.appHeaderTitle}>🚀 📆 Moonshot Calendar Inc.</h1>
      </header>
      <main>
        {!launches ? <div>Loading...</div> : null}

        {launches && launches.error ? <div>{launches.error}</div> : null}

        {launches ? <div>{JSON.stringify(launches, null, 2)}</div> : null}
      </main>
    </div>
  );
}

export default App;
