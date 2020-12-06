import React from "react";

import { LaunchResponseData, useFetchLaunches } from "./Hooks/useFetchLaunches";
import { Loader } from "./Components/Loader/Loader";
import { ErrorAlert } from "./Components/ErrorAlert/ErrorAlert";
import { Map } from "./Components/Map/Map";

import styles from "./App.module.css";

function App() {
  const launchResponseData: LaunchResponseData | null = useFetchLaunches();

  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <h1 className={styles.appHeaderTitle} data-testid="app-title">
          🚀 📆 Moonshot Calendar Inc.
        </h1>
      </header>

      <main>
        {!launchResponseData ? <Loader data-testid="app-loader" /> : null}

        {launchResponseData && launchResponseData.error ? (
          <ErrorAlert
            data-testid="error-alert"
            errorText={launchResponseData.error}
          />
        ) : null}

        {launchResponseData ? (
          <div className={styles.mapContainer} data-testid="map-container">
            <Map launches={launchResponseData.launches} />
          </div>
        ) : null}
      </main>
    </div>
  );
}

export default App;
