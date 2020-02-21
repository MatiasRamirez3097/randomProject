import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './style';
class DefaultTouchableOpacity extends Component {
  render() {
    const {onPress, textValue} = this.props;
    return (
      <View style={styles.view}>
        <TouchableOpacity style={styles.button} onPress={onPress}>
          <Text style={styles.text}>{textValue}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default DefaultTouchableOpacity;
