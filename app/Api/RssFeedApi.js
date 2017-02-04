'use strict';

var Api = {
  fetchRss(url) {
    var url =  (url);
    return fetch(url).then((res) => res.json()).catch((e) => console.log(e));
  },
  fetchVideos() {
    const youtube = "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=UUWrtW9MRIYG7K_7t0QC7FPw&key=AIzaSyBMzZ7Zb3WDJucbRX10Q1fGbfFO4xMwO3o";
    return fetch(youtube).then((res) => res.json());
  }
};

module.exports = Api;
