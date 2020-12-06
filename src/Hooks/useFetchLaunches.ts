import { useEffect, useState } from "react";
import axios from "axios";
import { DateRange, LaunchResponseData } from "./useFetchLaunches.types";
import { UseFetchLaunchesService } from "./useFetchLaunches.service";

const API_URL = "https://launchlibrary.net/1.3/launch";

export const useFetchLaunches = (): null | LaunchResponseData => {
  const [
    launchResponseData,
    setLaunchResponseData,
  ] = useState<null | LaunchResponseData>(null);

  const [dates, setDates] = useState<null | DateRange>(null);

  const fetchLaunches = async (url: string) => {
    try {
      const response = await axios.get(url);
      const launches = UseFetchLaunchesService.mapResponseForClient(
        response.data.launches
      );
      setLaunchResponseData({ launches });
    } catch (error) {
      setLaunchResponseData({ error: error.message });
    }
  };

  useEffect(() => {
    // default is to return data for the next three months
    const fromRaw = new Date();
    const from = UseFetchLaunchesService.getFormattedDate(fromRaw);

    const toRaw = new Date();
    toRaw.setDate(toRaw.getDate() + 90);
    const to = UseFetchLaunchesService.getFormattedDate(toRaw);

    setDates({ from, to });
  }, []);

  useEffect(() => {
    if (dates) {
      setLaunchResponseData(null);
      fetchLaunches(`${API_URL}/${dates.from}/${dates.to}`);
    }
  }, [dates]);

  return launchResponseData;
};
