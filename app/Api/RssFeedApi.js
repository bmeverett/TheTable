'use strict';

var Api = {
  fetchRss(url) {
    if (!(/^http:\/\//.test(url))) {
      url = "http://" + url;
    }

    var GOOGLE_FEED_API_URL = 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=-1&q=';
    var url = GOOGLE_FEED_API_URL + encodeURIComponent(url);
    return fetch(url).then((res) => res.json());
  },
  fetchVideos() {
    const youtube = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUWrtW9MRIYG7K_7t0QC7FPw&key=AIzaSyBMzZ7Zb3WDJucbRX10Q1fGbfFO4xMwO3o";
    return fetch(youtube).then((res) => res.json());
  }
};

module.exports = Api;
