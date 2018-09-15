const Api = {
  fetchRss(url) {
    return fetch(url, {
      headers: {
        "Cache-Control": "no-cache"
      }
    })
      .then(res => res.json())
      .catch(e => console.log(e));
  }
};

module.exports = Api;
