import 'dotenv/config';
import env from 'env-var';

export const envs = {

    PORT: env.get('PORT').required().asPortNumber(),
    PUBLIC_FILE: env.get('PUBLIC_FILE').default('public').asString(),
};