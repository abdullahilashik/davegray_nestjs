import { ConsoleLogger, Injectable } from '@nestjs/common';
import { promises as fs } from 'fs';
import * as path from 'path';

@Injectable()
export class MyLoggerService extends ConsoleLogger {
  private async ensureLogDirectory() {
    const logPath = path.join(__dirname, '..', '..', 'logs');
    try {        
      await fs.mkdir(logPath, { recursive: true });
    } catch (error) {
    //   if (error.code !== 'EEXIST') throw error;
    }
  }

  async logToFile(entry: any, filename: string = 'myLogs') {
    const formattedEntry = `${Intl.DateTimeFormat('en-US', {
      dateStyle: 'short',
      timeStyle: 'short',
      timeZone: 'America/Chicago',
    }).format(new Date())}\t${entry}`;

    try {
      this.ensureLogDirectory(); // makes sure the is a log directory available
      await fs.mkdir(path.join(__dirname, '..', '..', 'logs')); // create the folder if not present
      await fs.appendFile(
        path.join(__dirname, '..', '..', 'logs', `${filename}.log`),
        formattedEntry,
      ); // append the logs entry into the file
    } catch (error) {
      if (error instanceof Error) console.log(error.message); //  if instane of error print it
    }
  }

  async log(message: any, context?: string) {
    const entry = `${context} - ${message}`;
    this.logToFile(entry);
    super.log(message, context);
  }
  async error(message: any, context?: string) {
    const entry = `${context} - ${message}`;
    this.logToFile(entry, 'myErrors');
    super.error(message, context);
  }
  async warn(message: any, context?: string) {
    const entry = `${context} - ${message}`;
    this.logToFile(entry, 'myWarning');
    super.warn(message, context);
  }
}
