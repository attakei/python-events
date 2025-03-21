/**
 * Fetch geocode of events.
 */

import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { setTimeout } from 'node:timers/promises';
import { program } from 'commander';
import type { CalendarEvent, GeocodeData } from '../src/types';

program
  .option('--master <master>')
  .option('--input <input>')
  .action(async (options) => {
    const masterPath = resolve(options.master);
    const master: GeocodeData = (() => {
      if (!existsSync(masterPath)) return {};
      return JSON.parse(readFileSync(masterPath, { encoding: 'utf8' }));
    })();

    const events: { [key: string]: CalendarEvent } = (() => {
      const inputPath = resolve(options.input);
      if (!existsSync(inputPath)) throw new Error('File not found.');
      return JSON.parse(readFileSync(inputPath, { encoding: 'utf8' }));
    })();

    const locations = Array.from(
      new Set(Object.values(events).map((e) => e.location)),
    ).filter((l) => !(l in master));
    for (const l of locations) {
      const url = `https://nominatim.openstreetmap.org/search?q=${l.replace(/ /g, '+')}&format=json&limit=1`;
      console.log(url);
      const geoData = await fetch(url).then((resp) => resp.json());
      if (geoData.length !== 0)
        master[l] = {
          lat: Number.parseFloat(geoData[0].lat),
          lng: Number.parseFloat(geoData[0].lon),
        };
      await setTimeout(Math.random() * 5000);
    }

    writeFileSync(masterPath, JSON.stringify(master));
  });

program.parse();
