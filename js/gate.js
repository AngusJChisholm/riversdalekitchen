// Email gate for the planner. First visit asks for an email before the planner opens.
// The email goes to the sign-up database (waitlistEndpoint in js/config.js) and is remembered in this browser,
// so returning visitors go straight in. Set plannerGate: false in js/config.js to switch it off.
(function () {
  const CFG = window.DOCKET_CONFIG || {};
  const R = window.DocketRecipes;
  if (CFG.plannerGate === false || !R || R.member()) return;
  if (new URLSearchParams(location.search).has('nogate')) return; // for testing

  const main = document.getElementById('main');
  document.body.classList.add('gated');
  if (main) main.setAttribute('inert', '');

  const wrap = document.createElement('div');
  wrap.className = 'gate';
  wrap.setAttribute('role', 'dialog');
  wrap.setAttribute('aria-modal', 'true');
  wrap.setAttribute('aria-labelledby', 'gate-h');
  wrap.innerHTML = `
    <form class="gate-card" id="gate-form" novalidate>
      <span class="eyebrow">Free while we're in beta</span>
      <h2 id="gate-h">Pop your email in to start planning</h2>
      <p>You'll get the full planner, every recipe and your shopping list. We'll send five dinner ideas each Wednesday, and you can unsubscribe any time.</p>
      <label class="sr" for="gate-email">Email</label>
      <div class="unlock-form">
        <input id="gate-email" type="email" autocomplete="email" inputmode="email" placeholder="you@example.com" required>
        <button class="btn" type="submit">Let's cook</button>
      </div>
      <p class="gate-msg" id="gate-msg" aria-live="polite"></p>
      <p class="gate-fine">We only use your email for Riversdale Kitchen. No spam, never sold.</p>
    </form>`;
  document.body.appendChild(wrap);

  const input = wrap.querySelector('#gate-email');
  const msg = wrap.querySelector('#gate-msg');
  setTimeout(() => input.focus(), 50);

  wrap.querySelector('#gate-form').addEventListener('submit', async e => {
    e.preventDefault();
    const email = input.value.trim().toLowerCase();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) { msg.textContent = 'Pop in an email address like you@example.com.'; input.focus(); return; }
    msg.textContent = 'One sec...';
    await R.unlock(email, 'planner-gate');
    wrap.remove();
    document.body.classList.remove('gated');
    if (main) main.removeAttribute('inert');
  });
})();
