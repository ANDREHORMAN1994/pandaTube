import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { useTheme, Box } from 'native-base';
import { useContext } from 'react';
import { AuthContext } from '../context/Provider';
import AuthRoutes from './auth.routes';
import AppRoutes from './app.routes';

function Routes() {
  const { isAuth } = useContext(AuthContext);
  const { colors } = useTheme();
  const theme = DefaultTheme;
  theme.colors.background = colors.gray[700];

  return (
    <Box flex={1} bg="gray.700">
      <NavigationContainer theme={theme}>
        {isAuth ? <AppRoutes /> : <AuthRoutes />}
      </NavigationContainer>
    </Box>
  );
}

export default Routes;
