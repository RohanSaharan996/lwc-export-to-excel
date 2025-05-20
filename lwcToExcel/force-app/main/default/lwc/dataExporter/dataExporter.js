import { LightningElement } from 'lwc';
import { loadScript } from 'lightning/platformResourceLoader';
import xlsx from '@salesforce/resourceUrl/xlsx';

export default class TableExportXlsx extends LightningElement {
    xlsxInitialized = false;

    renderedCallback() {
        if (this.xlsxInitialized) return;
        this.xlsxInitialized = true;

        loadScript(this, xlsx)
            .then(() => {
                console.log('XLSX library loaded.');
            })
            .catch(error => {
                console.error('Failed to load XLSX:', error);
            });
    }

    exportToExcel() {
        const tables = this.template.querySelectorAll('table');
        if (!tables || tables.length === 0) {
            console.error('No tables found in template.');
            return;
        }

        // Step 1: Convert both tables to sheet data (arrays of arrays)
        const sheetData = [];

        tables.forEach((table, index) => {
            const sheet = XLSX.utils.table_to_sheet(table, { raw: true });
            const data = XLSX.utils.sheet_to_json(sheet, { header: 1 });

            // Optional: Add a title row or separator between tables
           /* if (index > 0) {
                sheetData.push([]); // blank row
                sheetData.push([`Table ${index + 1}`]);
            }*/
            sheetData.push(...data);
        });

        // Step 2: Create workbook and append combined sheet
        const ws = XLSX.utils.aoa_to_sheet(sheetData);
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Renewal Summary');

        // Step 3: Download the file
        XLSX.writeFile(wb, 'RenewalSummary.xlsx');
    }
}