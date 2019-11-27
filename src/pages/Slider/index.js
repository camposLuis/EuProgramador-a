import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

import { ViewSlider } from './styles';

export default function Slider({ navigation }) {
  const [showRealApp, setShowRealApp] = useState(false);
  const [slides, setSlides] = useState([
    {
      key: 'somethun',
      title: 'Title 1',
      text: 'Você sabe como os apps que você utiliza funcionam?',
      backgroundColor: '#59b2ab',
    },
    {
      key: 'somethun-dos',
      title: 'Title 2',
      text: 'Other cool stuff',
      backgroundColor: '#febe29',
    },
    {
      key: 'somethun1',
      title: 'Rocket guy',
      text: "I'm already out of descriptions\n\nLorem ipsum bla bla bla",
      backgroundColor: '#22bcb5',
    },
  ]);

  function _renderItem() {
    return (
      <>
        {slides.map(item => (
          <ViewSlider>
            <Text key={item}>{item.title}</Text>
            <Text>{item.text}</Text>
          </ViewSlider>
        ))}
      </>
    );
  }

  function _onDone() {
    setShowRealApp(true);
  }

  return (
    <>
      <AppIntroSlider
        renderItem={_renderItem}
        slides={slides}
        onDone={() => _onDone}
      />
    </>
  );
}
