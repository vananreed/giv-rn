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
    margin: 10,
  }
});
