import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreenMiniApp from "../../screen/home";
import ServiceScreenMiniApp from "../../screen/service/ServiceScreen";

const Stack = createNativeStackNavigator();
const AuthorizedNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreenMiniApp} />
      <Stack.Screen name="Service" component={ServiceScreenMiniApp} />
    </Stack.Navigator>
  );
};

export default AuthorizedNavigation;
