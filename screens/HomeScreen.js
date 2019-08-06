import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';

import { MonoText } from '../components/StyledText';
import PostFeed from '../components/PostFeed/PostFeed.js';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      posts: []
    }
  }
  static navigationOptions = {
    title: 'Giv'
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <PostFeed posts={this.state.posts} />
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    this.loadPosts();
  }

  loadPosts() {
    // ** Placeholder ** replace with call to rails api to fetch post data
    let posts = [{"id":2,"charity_id":1,"project_id":null, "photo": "https://gradaustralia.com.au/sites/gradaustralia.com.au/files/styles/insight_detail__838x484_/public/Article_Charity_Is%20charity%20work%20right%20for%20me_838x484_2017.jpg?itok=xXLI8CnX", "caption":"We built a well in Guatemala, giving a village of 400 people access to a clean water source.", "likes": 23 },
                 {"id":3,"charity_id":1,"project_id":null, "photo": "https://financy.com.au/wp-content/uploads/2016/12/charity-work-480x320.jpg", "caption":"We built a well in Venezuela, giving a village of 400 people access to a clean water source.", "likes": 423 },
                 {"id":4,"charity_id":1,"project_id":null, "photo": "https://www.humanappeal.org.au/wp-content/uploads/2018/01/1stsection_waterwell-1024x768.jpg", "caption":"We built a well in Jamaica, giving a village of 400 people access to a clean water source.", "likes": 273 },
                 {"id":5,"charity_id":1,"project_id":null, "photo": "http://www.oneworld365.org/img/101/Building%20and%20Construction%20Volunteer%20Work%20Africa.jpg", "caption":"We built a well in Chile, giving a village of 400 people access to a clean water source.", "likes": 9236 }]

    this.setState({posts: posts});
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  }
});
