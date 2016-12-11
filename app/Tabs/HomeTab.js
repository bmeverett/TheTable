var React = require('react');
var ReactNative = require('react-native');
var Api = require('../Api/RssFeedApi');
var _ = require('lodash');

var {
    ActivityIndicatorIOS,
    Alert,
    AlertIOS,
    ActionSheetIOS,
    AsyncStorage,
    ScrollView,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    WebView,
    NavigatorIOS
} = ReactNative;

var EntryDetail = require('../EntryDetail');

export default class HomeTab extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            feeds: []
        }
    }

    componentDidMount() {
        const url = "http://www.thetableinbetween.org/weekly-topic?format=rss"
        Api.fetchRss(url).then((res) => {
            if (res.responseStatus == 200) {
                var entries = res.responseData.feed.entries;
                this.setState({ feeds: this.state.feeds.concat(entries) })
                // Alert.Alert("test", res.responseDetails);
            } else {
                Alert.alert(res.responseDetails);

            }
        });
    }

    _showEntryDetails(entry: any) {
        console.log(entry)
        this.props.navigator.push({
            component: EntryDetail,
            title: entry.title,
            passProps: {
                entry: entry
            }

        })
        this.props.navigator.pop;

    }
    _renderEntries(entry: any, i) {
   //     console.log(entry)
        return (
            <TouchableHighlight
                key={i}
                underlayColor="rgba(0,0,0,.1)"
                onPress={() => { this._showEntryDetails(entry) } } >
                <View style={styles.wrapper}>
                    <View style={styles.header}>
                        <Text style={styles.title}>{entry.title}</Text>
                        <Text style={styles.description}>{new Date(entry.publishedDate).toDateString()}</Text>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }

    render() {
        return (

            <ScrollView style={styles.scrollView}>
                {this.state.feeds.map((feed, i) => { return this._renderEntries(feed, i) })}
            </ScrollView>
           
        );
    }

};

var styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    wrapper: {
        paddingTop: 20,
        paddingBottom: 15,
        paddingLeft: 10,
        paddingRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#e9e9e9',
    },
    title: {
        paddingTop: 2,
        paddingBottom: 3,
        paddingRight: 15,
        fontWeight: 'bold',
        fontSize: 16,
    },
    description: {
        color: "#B4AEAE",
        fontSize: 12,
        marginBottom: 5,
    },
    smallText: {
        fontSize: 11,
        textAlign: 'right',
        color: "#B4AEAE",
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white',
    },
    webView: {

    }
});

module.exports = HomeTab;