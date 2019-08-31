import React from 'react';

import {
  createAppContainer,
  createBottomTabNavigator,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';

// import Icon from 'react-native-vector-icons/MaterialIcons';
// import Dashboard from '~/Pages/Dashboard';
// import Profile from '~/Pages/Profile';

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
      },
      {
        initialRouteName: isSigned ? 'App' : 'Sign',
      }
    )
  );
