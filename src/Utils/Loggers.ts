import winston from 'winston';
import * as fs from 'fs';
import * as path from 'path';

const { createLogger, format, transports } = winston;
const { combine, colorize, simple, timestamp, json, printf } = format;

const logsDir = path.join("dist", '../logs');
if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir, { recursive: true });
}

const TIMESTAMP_FORMAT = 'YYYY-MM-DD HH:mm:ss';

const CONSOLE_FORMAT = format.combine(
    colorize(),
    simple(),
    timestamp({ format: TIMESTAMP_FORMAT }),
    printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)
);

const FILE_FORMAT = combine(
    timestamp({ format: TIMESTAMP_FORMAT }),
    json()
);

export const logger = createLogger({
    level: 'info',
    format: combine(
        timestamp({ format: TIMESTAMP_FORMAT }),
        json()
    ),
    transports: [
        new transports.Console({ format: CONSOLE_FORMAT }),
        new transports.File({ filename: path.join(logsDir, 'error.log'), level: 'error', format: FILE_FORMAT}),
        new transports.File({ filename: path.join(logsDir, 'combined.log'), format: FILE_FORMAT})
    ]
});
