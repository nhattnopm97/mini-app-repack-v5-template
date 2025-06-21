import {NavigationState, useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {useAccountZutandStore} from '../../store/accountZustandStore';

const ServiceScreenMiniApp = () => {
  const {setIsLogin} = useAccountZutandStore();
  const navigation = useNavigation<any>();
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>Service Screen</Text>
      <Button
        title="sang home"
        onPress={() => navigation.navigate('Home' as never)}
      />
      <Button onPress={() => navigation.goBack()} title="Go back"></Button>
      <Button
        onPress={() => navigation.popTo('Home')}
        title="Go to Home"></Button>
      <Button
        title="Go back to first screen in stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};
export default ServiceScreenMiniApp;
