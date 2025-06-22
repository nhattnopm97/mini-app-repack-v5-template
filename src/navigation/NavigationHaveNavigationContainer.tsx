import {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import WrapNavigationRemote from '.';

const Stack = createNativeStackNavigator();
const WrapNavigationRemote2 = () => {
  useEffect(() => {
    console.log('WrapNavigation container from remote');
  }, []);
  return (
    <NavigationContainer>
      {/* <MiniAppContainer /> */}
      <Stack.Navigator>
        <Stack.Screen
          name="MiniApp"
          component={WrapNavigationRemote}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="wrap-auth-unauth"
          component={WrapAuthAndUnAuthNavigator}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default WrapNavigationRemote2;
