import { env } from '$env/dynamic/private'
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWTProvider } from './google_auth';
import type { AnnouncementRow } from '../../ambient';
import { DateTime } from 'luxon';

export const sheetImporter = {
    async load(): Promise<AnnouncementRow[]> {
        const jwt = await JWTProvider.getJWT([
            'https://www.googleapis.com/auth/spreadsheets.readonly'
        ]);

        const doc = new GoogleSpreadsheet(env.GOOGLE_SHEET_ID, jwt);
        await doc.loadInfo();
        const sheet = doc.sheetsByIndex[0];
        const rows = (await sheet.getRows<AnnouncementRow>()).map(row => {
            return <AnnouncementRow>{
                id: row.get('id'),
                title: row.get('title'),
                description: row.get('description'),
                place: row.get('place'),
                date: DateTime.fromFormat(row.get('date'), "dd/mm/yyyy").toJSDate(),
            };
        });

        return new Promise((resolve, reject) => {
            resolve(rows);
        });
    }
}
