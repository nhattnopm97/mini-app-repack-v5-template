import {useNavigation} from '@react-navigation/native';
import {Button, Text, View} from 'react-native';
import {useAccountZutandStore} from '../../store/accountZustandStore';

const HomeScreenMiniApp = () => {
  const {setIsLogin} = useAccountZutandStore();
  const navigation = useNavigation<any>();
  const handleLogout = () => {
    setIsLogin(false);
  };
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>Home Screen</Text>
      <Button
        title="Sang service "
        onPress={() => navigation.navigate('Service' as never)}
      />
      <Button title="Đăng xuất" onPress={handleLogout} />
    </View>
  );
};
export default HomeScreenMiniApp;
