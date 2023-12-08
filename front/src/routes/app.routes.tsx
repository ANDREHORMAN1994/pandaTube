import { createBottomTabNavigator, type BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { useTheme } from 'native-base';
import Details from '@screens/Details';
import History from '@screens/History';
import Home from '@screens/Home';
import Profile from '@screens/Profile';
import HomeSvg from '@assets/home.svg';
import HistorySvg from '@assets/history.svg';
import ProfileSvg from '@assets/profile.svg';
import { Platform } from 'react-native';

type AppRoutesTypes = {
  home: undefined;
  history: undefined;
  profile: undefined;
  details: { id: string };
}

export type AppRoutesNavigationProps = BottomTabNavigationProp<AppRoutesTypes>;

const { Navigator, Screen } = createBottomTabNavigator<AppRoutesTypes>();

function AppRoutes() {
  const { sizes, colors } = useTheme();
  const iconSize = sizes[8];

  return (
    <Navigator screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.green[500],
      tabBarInactiveTintColor: colors.gray[200],
      tabBarStyle: {
        backgroundColor: colors.gray[600],
        borderTopWidth: 0,
        height: Platform.OS === 'android' ? 'auto' : 96,
        paddingTop: sizes[10],
        paddingBottom: sizes[10],
        justifyContent: 'center',
        alignItems: 'center',
      }
    }}>
      <Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <HomeSvg fill={color} width={iconSize} height={iconSize} />
          ),
        }}
      />
      <Screen
        name="history"
        component={History}
        options={{
          tabBarIcon: ({ color }) => (
            <HistorySvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <ProfileSvg fill={color} width={iconSize} height={iconSize} />
          )
        }}
      />
      <Screen
        name="details"
        component={Details}
        options={{
          tabBarButton: () => null,
        }}
      />
    </Navigator>
  )
};

export default AppRoutes;
