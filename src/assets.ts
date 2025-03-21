import _events from './assets/events.json' assert { type: 'json' };
import _geocodes from './assets/geocodes.json' assert { type: 'json' };
import type { CalendarEvent, GeocodeData } from './types';

export const events: CalendarEvent[] = _events;
export const geocodes: GeocodeData = _geocodes;
