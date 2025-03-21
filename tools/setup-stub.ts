/**
 * Generate stub files for applications.
 */
import { existsSync } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const FILES = [
  { path: resolve(ROOT, 'src', 'assets', 'geocodes.json'), content: '{}' },
  { path: resolve(ROOT, 'src', 'assets', 'events.json'), content: '[]' },
];

(async () => {
  await Promise.all(
    FILES.map(async ({ path, content }) => {
      if (existsSync(path)) {
        return;
      }
      await writeFile(path, content);
    }),
  );
})();
