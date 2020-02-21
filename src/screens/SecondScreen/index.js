import React, {Component} from 'react';
import {View} from 'react-native';
import {DefaultTouchableOpacity} from '../../components';
import styles from './style';
class SecondScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.view}>
        <DefaultTouchableOpacity
          onPress={() => navigation.navigate('Home')}
          textValue="Soy un boton 2"
        />
      </View>
    );
  }
}
export default SecondScreen;
