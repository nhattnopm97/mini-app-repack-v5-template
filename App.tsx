import {SafeAreaProvider} from 'react-native-safe-area-context';
import {NavigationContainer} from '@react-navigation/native';
import WrapNavigation from './src/navigation';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <WrapNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
