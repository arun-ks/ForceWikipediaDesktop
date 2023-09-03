const url = window.location.href;
if (url.includes("en.m.wikipedia.org")) {
  window.location.href = url.replace("en.m.wikipedia.org", "en.wikipedia.org");
}
else {
   if (url.includes("www.reddit.com")) {
      window.location.href = url.replace("www.reddit.com", "old.reddit.com");
   }
}