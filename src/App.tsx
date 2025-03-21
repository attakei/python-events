import 'bulma/css/bulma.min.css';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { events, geocodes } from './assets';
import MapView from './components/MapView';
import Nav from './components/Nav';
import { Container } from 'react-bulma-components';

function App() {
  return (
    <>
      <Nav />
      <Container style={{marginTop: 'var(--bulma-navbar-height)'}}>
        <MapView events={events} geocodes={geocodes} />
      </Container>
    </>
  );
}

export default App;
