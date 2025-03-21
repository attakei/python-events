import 'bulma/css/bulma.min.css';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { events, geocodes } from './assets';
import MapView from './components/MapView';

function App() {
  return (
    <>
      <h1>Python Events</h1>
      <MapView events={events} geocodes={geocodes} />
    </>
  );
}

export default App;
