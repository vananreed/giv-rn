import React from 'react';

import {
  View
} from 'react-native';

import Post from '../Post/Post';


export default class PostFeed extends React.Component {

  render() {
    let posts = this.props.posts.map((post, key) =>
      <Post key={post.id} photo={post.photo} caption={post.caption} charity={post.charity_id} project={post.project_id} likes={post.likes} />
    );

    return (<View>{posts}</View>);
  }
}
