import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://launchlibrary.net/1.3/launch";

export interface LaunchResponseData {
  error?: string;
  launches?: any[];
}

export interface Dates {
  from: string;
  to: string;
}

const getFormattedDate = (date: Date): string => {
  return date.toISOString().split("T")[0];
};

export const useFetchLaunches = (fromDate?: string, toDate?: string) => {
  const [
    launchesResponseData,
    setLaunchesResponseData,
  ] = useState<null | LaunchResponseData>(null);

  const [dates, setDates] = useState<null | Dates>(null);

  useEffect(() => {
    // default is to return data for the next three months
    const from = new Date();
    const to = new Date();
    to.setDate(to.getDate() + 90);
    setDates({ from: getFormattedDate(from), to: getFormattedDate(to) });
  }, [fromDate, toDate]);

  useEffect(() => {
    if (dates) {
      axios
        .get(`${API_URL}/${dates.from}/${dates.to}`)
        .then(({ data }) => {
          setLaunchesResponseData({ launches: data.launches });
        })
        .catch((error) => {
          setLaunchesResponseData({ error: "An error occurred." });
        });
    }
  }, [dates]);

  return launchesResponseData;
};