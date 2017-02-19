import config from '../../Config';

const Api = {
  fetchRss(url) {
    return fetch(url, {
      headers: {
        'Cache-Control': 'no-cache',
      },
    }).then(res => res.json()).catch(e => console.log(e));
  },
  fetchVideos() {
    const youtube = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUWrtW9MRIYG7K_7t0QC7FPw&key=${config.GOOGLE_API_KEY}`;
    return fetch(youtube).then(res => res.json());
  },
};

module.exports = Api;
