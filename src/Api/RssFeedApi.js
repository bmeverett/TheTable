const Api = {
  fetchRss(url) {
    return fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    })
      .then(res => res.json())
      .then(res => {
        const filter = {};
        res.items.forEach(ent => {
          const entry = ent.title.split('//')[0].toUpperCase();
          if (filter[entry]) {
            // push entry onto entry array
            filter[entry].push(ent);
          } else {
            filter[entry] = [];
            filter[entry].push(ent);
          }
        });
        return filter;
      })
      .catch(e => console.log(e));
  },
};

module.exports = Api;
