import 'bulma/css/bulma.min.css';
import 'leaflet/dist/leaflet.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useEffect, useState } from 'react';
import { Container, Heading } from 'react-bulma-components';
import { useTranslation } from 'react-i18next';
import { events, geocodes } from './assets';
import FilterView from './components/FilterView';
import Footer from './components/Footer';
import MapView from './components/MapView';
import Nav from './components/Nav';
import type { CalendarEvent } from './types';

function App() {
  const { t } = useTranslation();
  const [sizeFilter, setSizeFilter] = useState<string[]>([]);
  const [filteredEvents, setFilteredEvents] = useState<CalendarEvent[]>(events);
  const countAllEvents = events.length;

  useEffect(() => {
    console.log('called', sizeFilter);
    if (sizeFilter.length !== 0) {
      setFilteredEvents(events.filter((e) => sizeFilter.includes(e.group)));
    } else {
      setFilteredEvents(events);
    }
  }, [sizeFilter]);

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
        <MapView events={filteredEvents} geocodes={geocodes} />
        <FilterView events={events} setSizeFilter={setSizeFilter} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
