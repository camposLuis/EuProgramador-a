import { createAppContainer, createSwitchNavigator } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
import Menu from '~/components/Menu';
import Apresentation from './pages/Apresentation';
import Principal from './pages/Principal';
import Lesson from './pages/Lesson';
import Slider from './pages/Slider';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        Apresentation,
        Principal,
        Lesson,
        Slider,
        Menu,
      },
      {
        initialRouteName: isSigned ? 'Lesson' : 'Lesson',
      }
    )
  );
