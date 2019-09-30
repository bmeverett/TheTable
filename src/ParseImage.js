import React from 'react';
import ReactNative, {Image} from 'react-native';

var safeHtml = require('safe-html');

const config = {
  allowedTags: ['strong', 'span', 'b', 'p', 'i', 'em'],
  allowedAttributes: {},
};
export default function parseImage(body) {
  const img = body.split('<img');
  let santitize = safeHtml(body, config);
  const test = santitize
    .replace('&lt;', '<')
    .replace('&quot;', '"')
    .replace('/&gt;', '>')
    .replace('&quot; ', '"');
  santitize = safeHtml(test, config).trim();
  let imageSource;
  if (img.length > 1) {
    img[1].split('=');
    const index = img[1].indexOf('>');
    const realHtml = img[1].substring(0, index - 1).split('"')[1];
    imageSource = (
      <Image
        style={{flex: 1, alignSelf: 'auto'}}
        resizeMode="cover"
        source={{uri: realHtml}}
      />
    );
  }
  return imageSource;
}
