import {useEffect} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreenMiniApp from '../screen/home';
import ServiceScreenMiniApp from '../screen/service/ServiceScreen';
import WrapAuthAndUnAuthNavigator from './wrap-auth-unauth';

const Stack = createNativeStackNavigator();
const WrapNavigationRemote = () => {
  useEffect(() => {
    console.log('WrapNavigatio from remote');
  }, []);
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="wrap-auth-unauth"
        component={WrapAuthAndUnAuthNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
export default WrapNavigationRemote;
