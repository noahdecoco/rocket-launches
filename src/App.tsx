import React from "react";

import { LaunchResponseData, useFetchLaunches } from "./Hooks/useFetchLaunches";
import { Map } from "./Components/Map/Map";
import { Loader } from "./Components/Loader/Loader";

import styles from "./App.module.css";
import { ErrorAlert } from "./Components/ErrorAlert/ErrorAlert";

function App() {
  const launchResponseData: LaunchResponseData | null = useFetchLaunches();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeaderTitle}>🚀 📆 Moonshot Calendar Inc.</h1>
      </header>

      <main>
        {!launchResponseData ? <Loader /> : null}

        {launchResponseData && launchResponseData.error ? (
          <ErrorAlert errorText={launchResponseData.error} />
        ) : null}

        {launchResponseData ? (
          <div className={styles.mapContainer}>
            <Map launches={launchResponseData.launches} />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
