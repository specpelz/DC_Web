import { useState, useEffect } from "react";
import axios from "axios";
import { message } from "antd";
import { BASE_URL } from "@api/index";

// interface AirMonitoringDetail {
//   id: Key | null | undefined;
//   media: string | undefined;
//   title: string;
//   content: string;
// }

const useAirMonitoring = () => {
  const [AirMonitoringDetails, setAirMonitoringDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchAirMonitoringDetails = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BASE_URL}/air-monitoring`);
      console.log("fetchAirMonitoringDetails", response);

      // console.log("response", response);
      if (response.status === 200 || response.data.status === "success") {
        // message.success(response.data.message || "Email sent successfully!");
        setAirMonitoringDetails(response.data.data);
      }

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      message.error(
        error?.response?.data.message || "Error fetching air monitoring details"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAirMonitoringDetails();
  }, []);

  return { AirMonitoringDetails, loading };
};

export default useAirMonitoring;
