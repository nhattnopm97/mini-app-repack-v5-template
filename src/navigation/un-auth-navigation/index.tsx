import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../../screen/login';

const Stack = createNativeStackNavigator();
const UnAuthorizedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default UnAuthorizedNavigation;
