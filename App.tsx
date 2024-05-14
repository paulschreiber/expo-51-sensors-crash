/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {DeviceMotion} from 'expo-sensors';

function App(): React.JSX.Element {
  useEffect(() => {
    return DeviceMotion.addListener(motion => {
      console.log(motion);
    }).remove;
  }, []);

  return (
    <View>
      <Text>Hello</Text>
    </View>
  );
}

export default App;
