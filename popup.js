document.addEventListener('DOMContentLoaded', function () {
  const fromInput = document.getElementById('from');
  const toInput = document.getElementById('to');
  const addRuleButton = document.getElementById('addRule');

  addRuleButton.addEventListener('click', function () {
    const from = fromInput.value.trim();
    const to = toInput.value.trim();
    if (from && to) {
      // Save the rule to storage (you can use browser.storage.local)
      browser.storage.local.get({ rules: [] }).then(result => {
        const rules = result.rules;
        rules.push({ from, to });
        browser.storage.local.set({ rules }).then(() => {
          // Clear input fields
          fromInput.value = '';
          toInput.value = '';
        });
      });
    }
  });
});
