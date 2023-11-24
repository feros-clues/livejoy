#!/usr/bin/env node

/**
 * This is a LiveJoy server.
 */

import 'dotenv/config'
import { Config } from './config.js'
import path from 'path';
import express from 'express';

const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

export default function main(port: number = Config.port) {
  const app = express();

  app.use(express.static(path.join(__dirname, '..', 'public')))

  app.get('/', (req, res) => {
    return res.send('oh hii');
  })


  app.listen(port, () => console.log('Running on port: ', port));
}

main();

