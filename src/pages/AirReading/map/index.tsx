import  { useState } from "react";
import { 
  GoogleMap, 
  LoadScript, 
  Marker, 
  InfoWindow 
} from "@react-google-maps/api";

// Define the type of each device in AirMonitoringDetails
interface Device {
  id: string;
  lat: number;
  lon: number;
  location: string;
}

const containerStyle = {
  width: "100%",
  height: "500px",
};

const center = {
  lat: 9.082, // Nigeria's approximate center
  lng: 8.6753,
};

const MapHighlights = ({ id, lat, lon, location }: Device) => {
  const [selectedDevice, setSelectedDevice] = useState<Device | null>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleMapLoad = () => {
    setMapLoaded(true);
  };

  return (
    <div className="pb-[40px] lg:py-[40px]">
      <div className="flex flex-col gap-[8px] justify-center items-center">
        <h2
          style={{
            fontFamily: "Merriweather",
            fontWeight: 700,
          }}
          className="text-[20px] lg:text-[32px] lg:w-[379px] lg:leading-[38px] text-center"
        >
          Map Highlights
        </h2>
        <h3 className="text-[16px] lg:text-[18px] font-[500] lg:w-[980px] lg:leading-[28px] text-center">
          Location highlight of where DataCab has collected data and set up
          devices for data collection.
        </h3>

        <div className="w-full mt-[12px]">
          <LoadScript 
            googleMapsApiKey="AIzaSyDzofLb9GTpwTJDg2U-l0Ez-Ya4iw5dVss"
            onLoad={handleMapLoad}
          >
            {mapLoaded && (
              <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={6}
              >
                {window.google && window.google.maps && (
                  <Marker
                    key={id}
                    position={{ lat: lat, lng: lon }}
                    onClick={() =>
                      setSelectedDevice({
                        id,
                        lat,
                        lon,
                        location,
                      })
                    }
                    icon={{
                      url: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
                      scaledSize: new window.google.maps.Size(40, 40),
                    }}
                  />
                )}

                {selectedDevice && window.google && window.google.maps && (
                  <InfoWindow
                    position={{
                      lat: selectedDevice.lat,
                      lng: selectedDevice.lon,
                    }}
                    onCloseClick={() => setSelectedDevice(null)}
                  >
                    <div className="flex flex-col bg-primaryColor text-white p-[10px] rounded-[8px] w-[150px]">
                      <h4 className="text-lg font-semibold">
                        {selectedDevice.location}
                      </h4>
                      <p className="text-sm text-left">
                        Latitude: {selectedDevice.lat}
                      </p>
                      <p className="text-sm text-left">
                        Longitude: {selectedDevice.lon}
                      </p>
                    </div>
                  </InfoWindow>
                )}
              </GoogleMap>
            )}
          </LoadScript>
        </div>
      </div>
    </div>
  );
};

export default MapHighlights;