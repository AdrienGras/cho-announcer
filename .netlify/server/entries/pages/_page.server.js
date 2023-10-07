import { b as private_env } from "../../chunks/shared-server.js";
import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import { DateTime } from "luxon";
const JWTProvider = {
  async getJWT(scopes) {
    return new Promise((resolve, reject) => {
      resolve(new JWT({
        email: private_env.GOOGLE_AUTH_CLIENT_EMAIL,
        key: private_env.GOOGLE_AUTH_PRIVATE_KEY,
        scopes
      }));
    });
  }
};
const sheetImporter = {
  async load() {
    const jwt = await JWTProvider.getJWT([
      "https://www.googleapis.com/auth/spreadsheets.readonly"
    ]);
    const doc = new GoogleSpreadsheet(private_env.GOOGLE_SHEET_ID, jwt);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = (await sheet.getRows()).map((row) => {
      return {
        id: row.get("id"),
        title: row.get("title"),
        description: row.get("description"),
        place: row.get("place"),
        date: DateTime.fromFormat(row.get("date"), "dd/mm/yyyy").toJSDate()
      };
    });
    return new Promise((resolve, reject) => {
      resolve(rows);
    });
  }
};
async function load({ params }) {
  const rows = await sheetImporter.load();
  return {
    rows
  };
}
export {
  load
};
