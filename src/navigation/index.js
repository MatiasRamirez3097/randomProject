import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
//import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';
import HomeScreen from '../screens/HomeScreen';
import SecondScreen from '../screens/SecondScreen';
//const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
function rootStack() {
  /*return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );*/
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = 'home';
              /*iconName = focused
                ? 'ios-information-circle'
                : 'ios-information-circle-outline';*/
            } else if (route.name === 'Second') {
              iconName = 'search';
              //iconName = focused ? 'ios-list-box' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Icons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'white',
          activeBackgroundColor: 'black',
          inactiveBackgroundColor: 'black',
        }}>
        <Tabs.Screen name="Home" component={HomeScreen} />
        <Tabs.Screen name="Second" component={SecondScreen} />
      </Tabs.Navigator>
    </NavigationContainer>
  );
}

export default rootStack;
