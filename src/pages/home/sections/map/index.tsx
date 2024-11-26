import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet"; // Import Leaflet for custom icons

const devices = [
  { id: 1, name: "Device A", lat: 6.5244, lng: 3.3792 }, // Lagos
  { id: 2, name: "Device B", lat: 7.3775, lng: 3.947 }, // Abeokuta
  { id: 3, name: "Device C", lat: 9.0765, lng: 7.3986 }, // Abuja
  { id: 4, name: "Device D", lat: 6.4654, lng: 7.5464 }, // Enugu
  { id: 5, name: "Device E", lat: 10.3158, lng: 9.8442 }, // Jos
  { id: 6, name: "Device F", lat: 11.7459, lng: 11.9661 }, // Maiduguri
  { id: 7, name: "Device G", lat: 4.8156, lng: 7.0498 }, // Port Harcourt
  { id: 8, name: "Device H", lat: 8.4905, lng: 4.5481 }, // Ilorin
  { id: 9, name: "Device I", lat: 12.0022, lng: 8.5919 }, // Kano
  { id: 10, name: "Device J", lat: 7.8735, lng: 5.0745 }, // Akure
];

const MapHighlights = () => {
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
          <MapContainer
            center={{ lat: 9.082, lng: 8.6753 }} // Nigeria's approximate center
            zoom={6} // Adjust zoom to fit all markers
            style={{ height: "500px", width: "100%" }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; OpenStreetMap contributors"
            />
            {devices.map((device) => (
              <Marker
                key={device.id}
                position={[device.lat, device.lng]}
                icon={L.divIcon({
                  className: "device-label", // Custom class to style the label
                  html: ` 
                    <div style="width: 100px; display: flex; align-items: center; ">
                      <img src="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png" 
                           style=" height: 30px; margin-right: 8px;" />
                      <span style="font-size: 12px; font-weight: 600; color: black; background-color: white; padding: 3px 5px; border-radius: 10px;">${device.name}</span>
                    </div>
                  `, // Custom HTML content for the marker and label
                })}
              >
                <Tooltip>
                  <div>
                    <strong className="text-xl">{device.name}</strong>
                    <br />
                    <span className="text-xl">
                      Lat: {device.lat.toFixed(4)}, Lng: {device.lng.toFixed(4)}
                    </span>
                  </div>
                </Tooltip>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>
    </div>
  );
};

export default MapHighlights;
