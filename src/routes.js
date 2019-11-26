import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
      },
      {
        initialRouteName: isSigned ? 'Apresentation' : 'Apresentation',
      }
    )
  );
