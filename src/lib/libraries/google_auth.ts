import { JWT } from "google-auth-library";
import { env } from "$env/dynamic/private"

export const JWTProvider = {
    async getJWT(scopes: string[]): Promise<JWT> {
        return new Promise((resolve, reject) => {
            resolve(new JWT({
                email: env.GOOGLE_AUTH_CLIENT_EMAIL,
                key: env.GOOGLE_AUTH_PRIVATE_KEY,
                scopes
            }))
        })
    }
};