/**
 * Map display component
 */
import L from 'leaflet';
import { Icon } from 'leaflet';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import type { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import type { CalendarEvent, GeocodeData } from '../types';

const worldBounds = L.latLngBounds([-90, -180], [90, 180]);
const maxBounds = L.latLngBounds(L.latLng(-90, -180), L.latLng(90, 180));
const sizes: { [key: string]: [number, number] } = {
  default: [25, 41],
  large: [25, 41],
  small: [17, 27],
};

export type Props = {
  events: CalendarEvent[];
  geocodes: GeocodeData;
};

export const Component: FC<Props> = ({ events, geocodes }) => {
  const { t } = useTranslation();
  const visibleEvents = events.filter((e) => e.location in geocodes);
  return (
    <>
      <p style={{ textAlign: 'right' }}>
        {t('display-events', { count: visibleEvents.length })}
      </p>
      <MapContainer
        bounds={worldBounds}
        maxBounds={maxBounds}
        center={[30, 0]}
        zoom={2}
        style={{
          height: '50vh',
          maxWidth: '100vw',
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {visibleEvents.map((e) => (
          <Marker
            position={geocodes[e.location]}
            key={e.uid}
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: e.group in sizes ? sizes[e.group] : sizes.default,
                iconAnchor: [12, 41],
              })
            }
          >
            <Popup>
              <p>
                {/* biome-ignore lint: Use html of calendar event. */}
                <strong dangerouslySetInnerHTML={{ __html: e.body }} />
              </p>
              <ul>
                <li>
                  Date: {e.begin} - {e.end}
                </li>
              </ul>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </>
  );
};

export default Component;
