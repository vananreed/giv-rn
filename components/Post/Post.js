import React from 'react';

import {
  Text
} from 'react-native';

export default class Post extends React.Component {
  render() {
    return (<Text>{this.props.caption}</Text>);
  }
}
