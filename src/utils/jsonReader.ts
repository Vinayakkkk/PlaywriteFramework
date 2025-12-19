import fs from 'fs';
import path from 'path';

export function readJSON(relativePath: string) {
  const fullPath = path.resolve(process.cwd(),relativePath);
  const data = fs.readFileSync(fullPath, 'utf-8');
  return JSON.parse(data);
}
