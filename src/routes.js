import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';
import Lesson from './pages/Lesson';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
        Lesson,
      },
      {
        initialRouteName: isSigned ? 'Lesson' : 'Lesson',
      }
    )
  );
