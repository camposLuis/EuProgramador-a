import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import Menu from '~/components/Menu';
import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';
import Lessons from './pages/Activity/index';
import Lesson2 from './pages/Activity/index2';

// import Principal from './components/TelaTerminal';
import Lesson from './pages/Lesson';
import Slider from './pages/Slider';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
        Menu,
        Lessons,
        Lesson2,
        Lesson,
        Slider,
      },
      {
        initialRouteName: isSigned ? 'Lesson' : 'Lesson',
      }
    )
  );
