# Sign-up emails (the database)

Every email from the planner gate and the homepage sign-up goes to a Google Sheet:
**Riversdale Kitchen sign-ups** in Gus's Google Drive. One row per person, duplicates skipped.

## One-time setup (about 5 minutes)

1. Open the **Riversdale Kitchen sign-ups** sheet in Google Drive.
2. **Extensions > Apps Script**. Delete what's there and paste the script below. Click **Save**.
3. **Deploy > New deployment**. Click the cog next to "Select type" and pick **Web app**.
   - Execute as: **Me**
   - Who has access: **Anyone**
4. Click **Deploy**, then **Authorise access** and allow it (Google warns because it's your own unverified script; click Advanced > Go to project).
5. Copy the **Web app URL** (ends in `/exec`).
6. Paste it into `js/config.js` as `waitlistEndpoint: "https://script.google.com/macros/s/.../exec"`, bump the `?v=` tags and push. Or send the URL to Claude and it'll do it.

Test it: open the planner in a private window, put in an email, and check the sheet.

If you change the script later, use **Deploy > Manage deployments > Edit > New version** so the URL stays the same.

## The script

```js
// Riversdale Kitchen sign-ups: one row per person. Handles sign-ups and unsubscribes from the website.
function doPost(e) {
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    const data = JSON.parse((e.postData && e.postData.contents) || '{}');
    const email = String(data.email || '').trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email) || email.length > 200) return out({ ok: false });

    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
    if (sheet.getLastRow() === 0) sheet.appendRow(['Signed up (Melbourne)', 'Email', 'Source', 'Page', 'Unsubscribed']);
    if (sheet.getRange(1, 5).getValue() === '') sheet.getRange(1, 5).setValue('Unsubscribed');
    const when = Utilities.formatDate(new Date(), 'Australia/Melbourne', 'yyyy-MM-dd HH:mm');
    const last = sheet.getLastRow();
    const emails = last > 1 ? sheet.getRange(2, 2, last - 1, 1).getValues().flat() : [];
    const i = emails.indexOf(email);
    const row = i === -1 ? 0 : i + 2;

    if (data.action === 'unsubscribe') {
      if (row) sheet.getRange(row, 5).setValue(when);
      else sheet.appendRow(['', email, 'unsubscribe', String(data.page || '').slice(0, 80), when]);
      return out({ ok: true });
    }

    if (!row) sheet.appendRow([when, email, String(data.source || '').slice(0, 40), String(data.page || '').slice(0, 80), '']);
    else if (sheet.getRange(row, 5).getValue() !== '') sheet.getRange(row, 5).setValue(''); // signed up again
    return out({ ok: true });
  } finally {
    lock.releaseLock();
  }
}

function out(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
```

## Updating the script (unsubscribes)

The site has an Unsubscribe page (footer link, or `unsubscribe.html?email=...` from an email). To make it work, paste the script above over the old one, then **Deploy > Manage deployments > pencil icon > Version: New version > Deploy**. The URL stays the same, so nothing on the site changes. Unsubscribed people get a date in column E. Never email anyone with a date there.

## Notes

- Sources: `planner-gate` (asked before the planner opens), `home-signup` (homepage form), `recipe-unlock`, `unsubscribe`.
- Turn the gate off with `plannerGate: false` in `js/config.js`. Add `?nogate` to the planner URL to skip it while testing.
- Before emailing people in bulk, use a proper email tool (Mailchimp, Kit or Resend) with an unsubscribe link, as Australia's Spam Act requires. Import the sheet as a CSV.
- Later, when accounts and Pro arrive, this list moves into the real member database.
