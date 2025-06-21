import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Button, Text, View} from 'react-native';
import {useAccountZutandStore} from '../../store/accountZustandStore';

const LoginScreen = () => {
  const {setIsLogin} = useAccountZutandStore();
  useEffect(() => {
    console.log('LoginScreen');
  }, []);

  const handleLogin = () => {
    //goi api login
    //nếu login thành công thì set isLogin = true
    setIsLogin(true);
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>LoginScreen</Text>
      <Button title="Đăng nhập" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
