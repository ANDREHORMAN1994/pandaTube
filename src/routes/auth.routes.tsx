import { createNativeStackNavigator, type NativeStackNavigationProp } from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';

type AuthRoutesTypes = {
  signIn: undefined;
  signUp: undefined;
}

export type AuthRoutesNavigationProps = NativeStackNavigationProp<AuthRoutesTypes>;

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutesTypes>();

function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }} >
      <Screen
        name="signIn"
        component={SignIn}
      />
      <Screen
        name="signUp"
        component={SignUp}
      />
    </Navigator>
  )
}

export default AuthRoutes;
