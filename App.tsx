import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import { useFonts, Roboto_400Regular, Roboto_700Bold } from '@expo-google-fonts/roboto';
import Loading from '@components/Loading';
import SignIn from '@screens/SignIn';
import THEME from './src/theme';

function App() {
  const [fontLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <NativeBaseProvider theme={THEME} >
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      
      {fontLoading ? (
        <SignIn />
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  );
}

export default App;
