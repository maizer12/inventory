import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const getFilePath = (relativePath) => {
  return path.join(__dirname, '..', relativePath);
};
