import { mkdir } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
export const createDir = (dir: string) => {
  const mkdirAsync = promisify(mkdir);
  const currentPath = process.cwd();
  return mkdirAsync(join(currentPath, dir));
};
