import { createHash } from 'crypto';
import { createReadStream } from 'fs';

export class Sha256Service {
  async calculateFileSha256(filePath: string): Promise<string> {
    return new Promise((resolve, reject) => {
      const hash = createHash('sha256');
      const stream = createReadStream(filePath);

      stream.on('data', (data) => {
        hash.update(data);
      });

      stream.on('end', () => {
        const sha256Sum = hash.digest('hex');
        resolve(sha256Sum);
      });

      stream.on('error', (error) => {
        reject(error);
      });
    });
  }
}