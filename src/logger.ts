import winston, {format} from 'winston';

const prettyJson = format.printf(info => {
	const timestamp = new Date().toLocaleTimeString();

	if (typeof info.message === 'object') {
		info.message = JSON.stringify(info.message, null, 4);
	}

	return `[${timestamp}] ${info.level} :: ${info.message}`;
});

export const Logger = winston.createLogger({
	level: process.env.LOG_LEVEL ?? 'info',
	format: format.combine(
		format.colorize(),
		format.prettyPrint(),
		format.splat(),
		format.simple(),
		prettyJson
	),
	transports: [
		new winston.transports.Console({})
	]
});
