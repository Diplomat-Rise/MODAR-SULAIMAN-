
// function downloadVCard() {
//   const vCardData = `
// BEGIN:VCARD
// VERSION:3.0
// FN:Afaf Mohammad Marouf
// TITLE:Sales Manager
// ORG:RISE Properties
// TEL;TYPE=WORK,VOICE:+971588982647
// TEL;TYPE=WORK,VOICE:+971547172318
// TEL;TYPE=WORK,VOICE:+97145665109
// EMAIL:Hiba@riseproperties.ae
// URL:http://www.riseproperties.ae
// ADR;TYPE=WORK:;;PO Box No 455979, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
// END:VCARD
//   `.trim();

//   const blob = new Blob([vCardData], { type: 'text/vcard' });
//   const url = URL.createObjectURL(blob);

//   const a = document.createElement('a');
//   a.href = url;
//   a.download = 'HIBA ALLAH NABIL RAYES ALI.vcf';
//   document.body.appendChild(a);
//   a.click();
//   document.body.removeChild(a);
//   URL.revokeObjectURL(url);
// }

// // Attach to button
// document.querySelector('.action-button[onclick*="download-vcard"]').addEventListener('click', function (e) {
//   e.preventDefault();
//   downloadVCard();
// });


function downloadVCard() {
  const vCardData = `
BEGIN:VCARD
VERSION:3.0
FN:MODAR SULAIMAN
TITLE:Sales Manager
ORG:RISE Properties
TEL;TYPE=WORK,VOICE:+971557840193
EMAIL:Modar@riseproperties.ae
URL:http://www.riseproperties.ae
ADR;TYPE=WORK:;;PO Box No 455979, Office NO.1607, Opal Tower, Business Bay;Dubai;;UAE
END:VCARD
  `.trim();

  const blob = new Blob([vCardData], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'modar sulaiman.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

document.querySelector('.save-contact-button').addEventListener('click', function (e) {
  e.preventDefault();
  downloadVCard();
});

