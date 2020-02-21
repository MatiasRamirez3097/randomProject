import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from './style';
import {DefaultTouchableOpacity} from '../../components';

class HomeScreen extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.view}>
        <Text>gato</Text>
        <DefaultTouchableOpacity
          onPress={() => navigation.navigate('Second')}
          textValue="Soy un boton"
        />
      </View>
    );
  }
}
export default HomeScreen;
