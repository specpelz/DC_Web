import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

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
  const [selectedDevice, setSelectedDevice] = useState<{
    name: string;
    location: string;
  } | null>(null);

  const handleMarkerClick = (device: (typeof devices)[0]) => {
    setSelectedDevice({
      name: device.name,
      location: `Lat: ${device.lat}, Lng: ${device.lng}`,
    });
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
          devices for data collection. Stay informed about our efforts across
          various regions as we continue to gather insights and expand our
          network.
        </h3>

        <div className="w-full mt-[12px]">
          {/* <iframe
            width="100%"
            height="600"
            style={{
              border: "none", // Replaces frameBorder
              overflow: "hidden", // Replaces scrolling="no"
              margin: 0, // Replaces marginHeight and marginWidth
            }}
            allowFullScreen
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Obasanjo%20Hilltop,%20Abeokuta+(Map%20Highlights)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe> */}

          {/* <MapContainer
            center={[9.082, 8.6753]} // Nigeria's approximate center
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
                interactive={false}
              >
                <Tooltip permanent>{device.name}</Tooltip>
              </Marker>
            ))}
          </MapContainer> */}

          {/* Device Details Display */}
          {/* Device Details Display */}
          {selectedDevice && (
            <div
              className="absolute top-5 left-5 bg-white p-4 shadow-lg rounded-md z-10"
              style={{ pointerEvents: "none" }} // Prevents interaction with the map
            >
              <h4 className="font-bold text-lg">{selectedDevice.name}</h4>
              <p className="text-sm">{selectedDevice.location}</p>
            </div>
          )}

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
                  eventHandlers={{
                    click: () => handleMarkerClick(device),
                  }}
                >
                  <Tooltip permanent>{device.name}</Tooltip>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapHighlights;
