# Radio MGIRI Quotation Automation

Automate the generation and delivery of quotations for advertisements on Radio MGIRI 90.4 FM using Google Apps Script.

## Overview

This Google Apps Script automates the process of creating and sending quotations to advertisers who submit requests through a Google Form.

## Features

- Automatically calculates advertisement costs and generates quotations in PDF format.
- Sends the quotation as an email attachment to the advertiser.
- Utilizes a Google Form for advertiser submissions.

## Prerequisites

- Google Account
- Google Sheets (for form responses)
- Google Docs (for the quotation template)
- Google Drive (for storing templates and generated quotations)

## Setup

1. **Google Form:**
   - Create a Google Form to collect advertiser details.
   - Include the necessary fields for information like name, address, advertisement details, etc.

2. **Google Sheets:**
   - Link the Google Form to a Google Sheet for form responses.

3. **Quotation Template:**
   - Create a Google Docs document to serve as the quotation template.
   - Use placeholders like `{serialNumber}`, `{name}`, etc., for dynamic content.

4. **Google Apps Script:**
   - Open the Google Sheet linked to the Form.
   - Go to "Extensions" > "Apps Script" to open the script editor.
   - Copy and paste the [script code](your_script_code.js) into the editor.
   - Save the script.

5. **Customization:**
   - Customize the column names and placeholders in the script according to your Form and template.

6. **Google Drive Folder:**
   - Create a folder in Google Drive to store the quotation templates and generated PDFs.
   - Replace `your_destination_folder_id` in the script with the actual folder ID.

## Usage

1. Advertisers submit the Google Form.
2. The script triggers when a form is submitted, calculates costs, generates a quotation, and sends it via email.
3. Quotation PDFs are stored in the specified Google Drive folder.

## License

This project is licensed under the [MIT License](LICENSE).

---
