import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
} from 'react-navigation';

// import Icon from 'react-native-vector-icons/MaterialIcons';
import Dashboard from '~/Pages/Dashboard';
import Profile from '~/Pages/Profile';
import Subscriber from '~/Pages/Subscriber';

import SignIn from '~/Pages/SignIn';
import SignUp from '~/Pages/SignUp';

// import SelectProvider from '~/Pages/New/SelectProvider';
// import SelectDateTime from '~/Pages/New/SelectDateTime';
// import Confirm from '~/Pages/New/Confirm';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Sign: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        App: createBottomTabNavigator(
          {
            Dashboard,
            Profile,
            Subscriber,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
              style: {
                backgroundColor: '#22202c',
              },
            },
          }
        ),
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
