import 'bulma/css/bulma.min.css';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Container, Heading } from 'react-bulma-components';
import { useTranslation } from 'react-i18next';
import { events, geocodes } from './assets';
import Footer from './components/Footer';
import MapView from './components/MapView';
import Nav from './components/Nav';

function App() {
  const { t } = useTranslation();
  const countAllEvents = events.length;

  return (
    <>
      <Nav />
      <Container
        style={{
          marginTop: 'var(--bulma-navbar-height)',
          minHeight: 'calc(100vh - 170px)',
        }}
      >
        <Heading>{t('scheduled-events', { count: countAllEvents })}</Heading>
        <MapView events={events} geocodes={geocodes} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
