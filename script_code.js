function onFormSubmit(e) {
  var sheet = SpreadsheetApp.getActiveSheet();
  var row = sheet.getLastRow();
  
  // replace column names with your own
  var letterNo = sheet.getRange(row, 2).getValue();
  var name = sheet.getRange(row, 3).getValue();
  var address = sheet.getRange(row, 4).getValue();
  var adName = sheet.getRange(row, 5).getValue();
  var adSec = sheet.getRange(row, 6).getValue();
  var adSlot = sheet.getRange(row, 7).getValue();
  var adDay = sheet.getRange(row, 8).getValue();
  var cc = sheet.getRange(row, 9).getValue();;

  
  // calculate ad cost and GST
  
  var totalSec = adSec * adSlot * adDay;
  var adCost = totalSec * 7.40;
  var adGST = adCost * 0.18;
  var finalCost = adCost + adGST;
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); 
  const yy = String(today.getFullYear()).slice(-2);
  var nxyr = String(today.getFullYear()+1).slice(-2);
  
  // replace file ID with your own
  var templateFile = DriveApp.getFileById('14JFzNwX9gEiNEIrppXkewNUJeHg03Crl1VVEaZQASt0');
  
  // make a copy of the template file and rename it
  var newFile = templateFile.makeCopy(name + ' Quotation', DriveApp.getFolderById('1pTxCkQZsEHwQ_5-iJocaa25XNaqny5JX'));
  
  // get the PDF URL
  var pdfUrl = newFile.getDownloadUrl();
  
  // replace text in the new file
  var doc = DocumentApp.openById(newFile.getId());
  var body = doc.getBody();


  
  body.replaceText('{serialNumber}', letterNo);
  body.replaceText('{name}', name);
  body.replaceText('{address}', address);
  body.replaceText('{adName}', adName);
  body.replaceText('{adSec}', adSec);
  body.replaceText('{adSlot}', adSlot);
  body.replaceText('{adDay}', adDay);
  body.replaceText('{totalSec}', totalSec);
  body.replaceText('{adCost}', adCost.toFixed(2));
  body.replaceText('{adGST}', adGST.toFixed(2));
  body.replaceText('{finalCost}', finalCost.toFixed(2));
  body.replaceText('{dd}', dd);
  body.replaceText('{mm}', mm);
  body.replaceText('{yy}', yy);
  body.replaceText('{nxyr}', nxyr);

  
  // save and close the new file
  doc.saveAndClose();
  
  // send the PDF as an attachment
  var recipient = sheet.getRange(row, 10).getValue();
  var cc = sheet.getRange(row, 9)
  var subject = 'Quotation for Advt on Radio MGIRI 90.4 Fm';
  var body = 'Hello,\nGreetings of the day!\nPlease find attached quotation for your reference.';
  GmailApp.sendEmail(recipient, subject, body, {
    attachments: [newFile.getAs(MimeType.PDF)],
  });
  
  // save the PDF URL in the sheet
  sheet.getRange(row, 09).setValue(pdfUrl);
}
