browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'loading') {
    // Load the rules from storage
    browser.storage.local.get({ rules: [] }).then(result => {
      const rules = result.rules;
      if (rules.length === 0) return;

      // Apply each rule to the URL
      const newUrl = rules.reduce((url, rule) => url.replace(rule.from, rule.to), tab.url);

      // Update the tab's URL
      if (newUrl !== tab.url) {
        browser.tabs.update(tabId, { url: newUrl });
      }
    });
  }
});
