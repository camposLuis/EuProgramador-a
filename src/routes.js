import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';
import Menu from './components/Menu';
import Lessons from './pages/Activity/index';
import Lesson2 from './pages/Activity/index2';

// import Principal from './components/TelaTerminal';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
        Menu,
        Lessons,
        Lesson2,
      },
      {
        initialRouteName: isSigned ? 'Apresentation' : 'Apresentation',
      }
    )
  );
