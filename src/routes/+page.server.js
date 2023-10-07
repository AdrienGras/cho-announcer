import { sheetImporter } from '$lib/libraries/sheet_importer';

/** @type {import('./$types').PageServerLoad} */
export async function load({ params }) {
    const rows = await sheetImporter.load();

    return {
        rows
    };
}