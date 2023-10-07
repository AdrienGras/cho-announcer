import { JWT } from "google-auth-library";
import creds from '../../../creds.json'

export const JWTProvider = {
    async getJWT(scopes: string[]): Promise<JWT> {
        return new Promise((resolve, reject) => {
            resolve(new JWT({
                email: creds.client_email,
                key: creds.private_key,
                scopes
            }))
        })
    }
};