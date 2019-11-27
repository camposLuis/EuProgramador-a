import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';

import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';
<<<<<<< HEAD
import Menu from './components/Menu';
import Lessons from './pages/Activity/index';
import Lesson2 from './pages/Activity/index2';

// import Principal from './components/TelaTerminal';
=======
import Lesson from './pages/Lesson';
import Slider from './pages/Slider';
>>>>>>> 88ff0ce9729d775a67f3731ff618ba4e3d3106c7

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
<<<<<<< HEAD
        Menu,
        Lessons,
        Lesson2,
=======
        Lesson,
        Slider,
>>>>>>> 88ff0ce9729d775a67f3731ff618ba4e3d3106c7
      },
      {
        initialRouteName: isSigned ? 'Lesson' : 'Lesson',
      }
    )
  );
