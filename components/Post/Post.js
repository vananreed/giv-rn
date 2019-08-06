import React from 'react';

import {
  Text,
  Image,
  View,
  StyleSheet
} from 'react-native';

export default class Post extends React.Component {
  render() {
    return (
      <View>
        <Image
            style={styles.photo}
            source={{uri: this.props.photo}}
          />
        <Text style={styles.likeNumber}>{this.props.likes}</Text>
        <Text style={styles.caption}>{this.props.caption}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  photo: {
    width: "100%",
    height: 200
  },
  caption: {
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10
  },
  likeNumber: {
    color: "#23B116",
    marginLeft: 10,
    marginTop: 2
  }
});
