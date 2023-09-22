import { createClient } from "redis";
import logger from "./logger";
import config from "../config";

let redisClient = createClient({
	url: config.redis.url
});

redisClient.on('error', (err) => logger.error("Redis Error", err));
redisClient.on('connect', (data) => logger.info("Redis Connected"));

const connect = async (): Promise<void> => {
	await redisClient.connect()
}

export const RedisClient = {
	connect
}