export type CalendarEvent = {
  group: string;
  uid: string;
  title: string;
  begin: string;
  end: string;
  location: string;
  body: string;
};

export type CalendarMaster = {
  url: string;
  color?: string;
};

export type Geocode = { lat: number; lng: number };

export type GeocodeData = { [key: string]: Geocode };
