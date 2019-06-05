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
    console.log(this.state.posts);
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
    let posts = [{"id":2,"charity_id":1,"project_id":null,"caption":"We built a well in Guatemala, giving a village of 400 people access to a clean water source."},
                 {"id":3,"charity_id":1,"project_id":null,"caption":"We built a well in Venezuela, giving a village of 400 people access to a clean water source."}]
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
