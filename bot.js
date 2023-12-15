import * as fs from 'node:fs';
import * as path from 'node:path';
import {configDotenv} from 'dotenv';

configDotenv();

console.log(process.env.BOT_TOKEN);
