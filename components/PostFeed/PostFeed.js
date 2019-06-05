import React from 'react';

import {
  View
} from 'react-native';

import Post from '../Post/Post';


export default class PostFeed extends React.Component {

  render() {
    let posts = (this.props.posts ? this.props.posts.map((post, key) =>
      <Post key={post.id} caption={post.caption} charity={post.charity_id} project={post.project_id} />
    ) : []);

    return (<View>{posts}</View>);
  }
}
