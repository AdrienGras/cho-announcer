import { JWT } from "google-auth-library";
import { env } from "$env/dynamic/private"
import * as base64 from "base-64"

export const JWTProvider = {
    async getJWT(scopes: string[]): Promise<JWT> {
        const auth_sequence = env.GOOGLE_API_CREDS as string
        const decoded = base64.decode(auth_sequence)

        const creds = JSON.parse(decoded)

        return new Promise((resolve, reject) => {
            resolve(new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes
            }))
        })
    }
};