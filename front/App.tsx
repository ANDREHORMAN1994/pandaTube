import { StatusBar } from 'react-native';
import { NativeBaseProvider } from 'native-base';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import Loading from '@components/Loading';
import { Provider } from './src/context/Provider';
import Routes from './src/routes';
import THEME from './src/theme';

function App() {
  const [fontLoading] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Provider>
        {fontLoading ? (
          <Routes />
        ) : (
          <Loading />
        )}
      </Provider>
    </NativeBaseProvider>
  );
}

export default App;
