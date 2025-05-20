# lwc-export-to-excel
# Export Data from Lightning Web Component to Excel

This project demonstrates how to:
1. Export data from an LWC and **download it as an Excel file**
2. Export data and **attach the Excel file to a Salesforce record**

## 🔧 Tools Used
- Lightning Web Components (LWC)
- Apex
- SheetJS (XLSX.js)
- ContentVersion API

## 📁 Components

### LWC: `exportToExcel`
- Generates Excel using SheetJS
- Downloads file or sends to Apex for attachment

### Apex: `ExcelAttachmentController`
- Receives Base64-encoded Excel file
- Creates a `ContentVersion` and links it to a record

## 📦 Installation
1. Clone this repo
2. Push to your Salesforce Org using SFDX
3. Assign the component to a Lightning Page

## 🧠 Author
[RohanSaharan996] – Salesforce Developer

---


