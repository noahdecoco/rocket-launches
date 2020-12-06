import { useEffect, useState } from "react";
import axios from "axios";
import { Dates, LaunchResponseData } from "./useFetchLaunches.types";
import { UseFetchLaunchesService } from "./useFetchLaunches.service";

const API_URL = "https://launchlibrary.net/1.3/launch";

export const useFetchLaunches = (
  fromDate?: string,
  toDate?: string
): null | LaunchResponseData => {
  const [
    launchesResponseData,
    setLaunchesResponseData,
  ] = useState<null | LaunchResponseData>(null);

  const [dates, setDates] = useState<null | Dates>(null);

  const fetchLaunches = async (url: string) => {
    try {
      const response = await axios.get(url);
      const launches = UseFetchLaunchesService.mapResponseForClient(
        response.data.launches
      );
      setLaunchesResponseData({ launches });
    } catch (error) {
      setLaunchesResponseData({ error });
    }
  };

  useEffect(() => {
    // default is to return data for the next three months
    const from = new Date();
    const to = new Date();
    to.setDate(to.getDate() + 90);
    setDates({
      from: UseFetchLaunchesService.getFormattedDate(from),
      to: UseFetchLaunchesService.getFormattedDate(to),
    });
  }, [fromDate, toDate]);

  useEffect(() => {
    if (dates) {
      setLaunchesResponseData(null);
      fetchLaunches(`${API_URL}/${dates.from}/${dates.to}`);
    }
  }, [dates]);

  return launchesResponseData;
};
