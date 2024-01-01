import { CONFIG } from '@interfaces/global';

const config: CONFIG = {
    PORT: Number(process.env.PORT) || 3000,
    ENVIRONMENT: String(process.env.NODE_ENV),
    ACCESS_TOKEN_SECRET: String(process.env.ACCESS_TOKEN_SECRET),
    WEBAPP_URL: String(process.env.WEBAPP_URL),
    CHUCK_NORRIS_API: String(process.env.CHUCK_NORRIS_API),
};

export default config;

