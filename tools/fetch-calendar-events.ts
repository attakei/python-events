/**
 * Fetch event as master.
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { program } from 'commander';
import { parse } from 'smol-toml';
import { convertIcsCalendar } from 'ts-ics';
import type { CalendarEvent, CalendarMaster } from '../src/types';

type CalendarMasterData = { [key: string]: CalendarMaster };

const toISODateString = (d: Date): string => d.toISOString().slice(0, 10);

program
  .option('--out <out>')
  .option('-a, --aggregate')
  .action(async (options) => {
    const now = new Date();
    // Load calendar master.
    const calendars: CalendarMasterData = (() => {
      const settingsToml = resolve(import.meta.dirname, '..', 'settings.toml');
      const data = parse(readFileSync(settingsToml).toString());
      return data.calendars as CalendarMasterData;
    })();

    const promises = Object.entries(calendars).map(async ([group, cal]) => {
      const icsText = await fetch(cal.url).then((resp) => resp.text());
      const calendar = convertIcsCalendar(undefined, icsText);
      const events: CalendarEvent[] = (calendar.events || [])
        .map((e) => {
          if (e.description?.startsWith('<a ')) {
            e.description = `<a target="_blank" ${e.description.slice(3)}`;
          }
          return {
            group,
            uid: e.uid,
            title: e.summary,
            begin: toISODateString(e.start.date),
            end: toISODateString((e.end || e.start).date),
            location: e.location || '',
            body: e.description || '',
          };
        })
        // NOTE: Use only future events for initial development
        .filter((e) => e.begin > toISODateString(now));
      if (options.out !== undefined) {
        const out = resolve(options.out, `events.${group}.json`);
        console.log(options.out);
        writeFileSync(out, JSON.stringify(events));
      } else {
        console.log(events);
      }
      return events;
    });
    await Promise.all(promises).then(async (eventsList) => {
      if (options.aggregate !== undefined) {
        const out = resolve(options.out, 'events.json');
        await writeFile(out, JSON.stringify(eventsList.flat()));
      }
    });
  });

program.parse();
