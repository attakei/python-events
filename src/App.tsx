import 'bulma/css/bulma.min.css';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { events, geocodes } from './assets';
import Footer from './components/Footer';
import MapView from './components/MapView';
import Nav from './components/Nav';
import { Container } from 'react-bulma-components';

function App() {
  return (
    <>
      <Nav />
      <Container style={{marginTop: 'var(--bulma-navbar-height)', minHeight: 'calc(100vh - 170px)'}}>
        <MapView events={events} geocodes={geocodes} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
