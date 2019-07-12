addEventListener("fetch", event => {
  let url = new URL(event.request.url);
  url.hostname = "nhentai.net"; //change this

  let request = new Request(url, event.request);
  event.respondWith(
    fetch(request, {
      headers: {
        'Referer': 'https://nhentai.net/', //and this for referer
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.100 Safari/537.36' //change this with your UA
      }
    })
  );
});
