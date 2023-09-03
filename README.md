# Force Wikipedia Desktop
Firefox browser to ensure [Desktop version](https://en.wikipedia.org) of Wikipedia is used instead of the [mobile version](https://en.m.wikipedia.org/).

The current version also replaces [Default reddit](https://www.reddit.com) in URL with [Old Reddit](https://old.reddit.com)

# Installation Guide
- Copy the contents of this respository in a local directory
- Visit `about:debugging` on Firefox
- Click "This Firefox" in the left menu.
- Click "Load Temporary Add-on."
- Select manifest.json file your extension directory

# Customization
- Edit the javascript in `content.js` file to add more replacements.

# Future plans
<details>
<summary>Improvements to be done on this</summary>

- [ ] Add configuration page to add more rules for URL string replacements
         - The code is already in place, but it does not work unless Node.js, npm & webextension-polyfill are installed
- [ ] Ensure the wikipedia mobile-to-desktop logic works for all wiki languages (check if replacing ".m.wikipedia.org" will work for all languages).
- [ ] [Submit this firefox addon](https://extensionworkshop.com/documentation/publish/submitting-an-add-on/)
- [ ] Make this work for Chrome too
</details>
