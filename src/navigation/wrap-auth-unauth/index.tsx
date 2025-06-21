import {useAccountZutandStore} from '../../store/accountZustandStore';
import AuthorizedNavigation from '../auth-navigation';
import UnAuthorizedNavigation from '../un-auth-navigation';

const WrapAuthAndUnAuthNavigator = () => {
  const {isLogin} = useAccountZutandStore();
  return <>{isLogin ? <AuthorizedNavigation /> : <UnAuthorizedNavigation />}</>;
};

export default WrapAuthAndUnAuthNavigator;
