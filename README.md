# The Table

React Native application to design an app for [The Table](http://wwww.thetableinbetween.org) ministry at [Riverside Community Church](http://riversideconnect.org)

# Set Up

This repo depends on the YouTube API which requires an API Key. To ensure that you can build this make sure you add `Config.js` to the root of the project with your API Key.

```
git clone https://github.com/bmeverett/TheTable
cd TheTable
yarn install
touch Config.js
```
Replace the contents of Config.js with your YouTube API key.


```
export default const Config = {
    GOOGLE_API_KEY: KEYHERE
}
```

Then you can run `react-native run-ios` 