// Site settings you can change without touching the rest of the code.
window.DOCKET_CONFIG = {
  // Where sign-up emails go: paste your Google Sheet web app URL here (see EMAILS.md),
  // or a Formspree form URL. Leave it empty and emails are only remembered in the visitor's browser.
  waitlistEndpoint: "https://script.google.com/macros/s/AKfycbwZ3B5Z9zJ3tfbra-SSOigRjbti_iKyy5J8N4jDWRekUW3WmhkxcE8_JZwtZZAmQW84-A/exec",
  // Ask for an email before the planner opens. false = planner open to everyone.
  plannerGate: true,
  // The Riversdale Kitchen mailer (Cloudflare Worker) URL that emails the PDFs, e.g. "https://riversdale-kitchen-mailer.yourname.workers.dev/send".
  // Leave empty and "Send my plan" downloads the PDFs instead.
  emailEndpoint: "",
  // Weekly allowance for pantry staples (oil, salt, pepper, sugar), added to every Riversdale Kitchen total.
  staplesPerWeek: 10,
  // Who can see the full recipes. 'open' = everyone, no sign-up. 'email' = this week's picks free,
  // the rest free with an email. 'pro' = paid members only (needs recipeEndpoint).
  recipeAccess: 'email'
};
